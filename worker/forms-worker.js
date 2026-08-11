// syntrex-forms Cloudflare Worker
//
// Receives site form submissions (contact, diagnostic), stores them durably in
// Formspree, and sends instant automated follow-up through Resend:
//   1. a confirmation email to the submitter, and
//   2. a notification email to henry@syntrexio.com.
//
// The RESEND_API_KEY is a Worker SECRET (set with `wrangler secret put`), read
// from env at runtime. It is never hardcoded and must not be committed.

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkopyzln"; // durable store
const FROM = "Syntrex <hello@mail.syntrexio.com>";
const NOTIFY = "henry@syntrexio.com";
const MAX_BODY = 32 * 1024; // reject oversized payloads

const ALLOWED_ORIGINS = new Set([
  "https://syntrexio.com",
  "https://www.syntrexio.com",
]);

function corsHeaders(origin) {
  const allow = origin && ALLOWED_ORIGINS.has(origin) ? origin : "https://syntrexio.com";
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}

function json(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
  });
}

function escapeHtml(s) {
  return String(s ?? "").replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" })[c]);
}

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

// Send one email via the Resend API. Returns true on a 2xx response.
async function sendEmail(env, { to, subject, text, html, replyTo }) {
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to,
        subject,
        text,
        html,
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

function confirmationEmail(name) {
  const hi = name ? `Hi ${name},` : "Hi,";
  const text = `${hi}

Thanks for reaching out to Syntrex. We have your message, and a real person will respond within one business day.

Want a head start? Run the diagnostic and see exactly where to start:
https://syntrexio.com/diagnostic

Syntrex`;
  const html = `<div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#111;font-size:15px;line-height:1.6;max-width:520px;margin:0 auto;padding:8px 0;">
  <p style="margin:0 0 14px;">${escapeHtml(hi)}</p>
  <p style="margin:0 0 14px;">Thanks for reaching out to Syntrex. We have your message, and a real person will respond within one business day.</p>
  <p style="margin:0 0 18px;">Want a head start? Run the diagnostic and see exactly where to start.</p>
  <p style="margin:0 0 18px;"><a href="https://syntrexio.com/diagnostic" style="display:inline-block;background:#111;color:#fff;text-decoration:none;padding:11px 20px;border-radius:8px;font-weight:600;">Start the diagnostic</a></p>
  <p style="margin:0;color:#666;">Syntrex</p>
</div>`;
  return { subject: "We have your message", text, html };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin");

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders(origin) });
    }
    if (request.method !== "POST") {
      return json({ ok: false, error: "method_not_allowed" }, 405, origin);
    }

    // Size guard.
    const raw = await request.text();
    if (raw.length > MAX_BODY) {
      return json({ ok: false, error: "payload_too_large" }, 413, origin);
    }
    let data;
    try {
      data = JSON.parse(raw);
    } catch {
      return json({ ok: false, error: "invalid_json" }, 400, origin);
    }
    if (!data || typeof data !== "object") {
      return json({ ok: false, error: "invalid_body" }, 400, origin);
    }

    const email = typeof data.email === "string" ? data.email.trim() : "";
    const name = typeof data.name === "string" ? data.name.trim() : "";
    const formType = typeof data.form === "string" ? data.form : "contact";

    // 1. Durable store first. If Formspree does not accept it, report failure so
    //    the visitor retries and no lead is silently lost. Formspree also brings
    //    its own spam filtering, which gates the emails below.
    let stored = false;
    try {
      const fs = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      stored = fs.ok;
    } catch {
      stored = false;
    }
    if (!stored) {
      return json({ ok: false, error: "store_failed" }, 502, origin);
    }

    // 2. Instant follow-up via Resend. Best effort: the lead is already stored,
    //    so email failures do not fail the request, but we report their status.
    const emailStatus = { notification: false, confirmation: false };

    // Notification to Henry, with every submitted field.
    const fields = Object.entries(data)
      .filter(([k]) => k !== "answers")
      .map(([k, v]) => `${k}: ${typeof v === "string" ? v : JSON.stringify(v)}`)
      .join("\n");
    emailStatus.notification = await sendEmail(env, {
      to: NOTIFY,
      subject: `New ${formType} submission${name ? ` from ${name}` : ""}`,
      text: `New ${formType} submission via syntrexio.com:\n\n${fields}\n`,
      html: `<h2 style="font-family:sans-serif;">New ${escapeHtml(formType)} submission</h2><pre style="font-family:ui-monospace,SFMono-Regular,monospace;white-space:pre-wrap;font-size:13px;">${escapeHtml(fields)}</pre>`,
      replyTo: EMAIL_RE.test(email) ? email : undefined,
    });

    // Confirmation to the submitter, only for a syntactically valid address.
    if (EMAIL_RE.test(email)) {
      const { subject, text, html } = confirmationEmail(name);
      emailStatus.confirmation = await sendEmail(env, { to: email, subject, text, html });
    }

    return json({ ok: true, stored: true, email: emailStatus }, 200, origin);
  },
};
