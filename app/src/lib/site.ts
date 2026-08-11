// Site integrations: form follow-up and the Syntrex chatbot, both Cloudflare
// Workers on the same account as the chat Worker.
//
// Forms POST to the syntrex-forms Worker, which stores the submission durably in
// Formspree and then sends instant follow-up through Resend (a confirmation to
// the submitter and a notification to henry@syntrexio.com). The Formspree
// endpoint and email keys live in the Worker, not the browser.

const FORMS_ENDPOINT = "https://syntrex-forms.henrybello.workers.dev";
const CHAT_ENDPOINT = "https://syntrex-chat.henrybello.workers.dev";

// Submit a form to the syntrex-forms Worker. Resolves only on a 2xx response
// (the Worker returns 2xx once the lead is stored); the caller shows success or
// error UI. Deploy the Worker before shipping a build that points here.
export async function submitForm(data: Record<string, unknown>) {
  const res = await fetch(FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error(`Form submission failed (${res.status})`);
  }
  return { ok: true };
}

export type ChatMessage = { role: "user" | "assistant"; content: string };

// Send the conversation to the Syntrex chat Worker and return the assistant's
// reply. The Worker owns the system prompt, model, and max_tokens; the site sends
// ONLY the messages array. Response is the Anthropic Messages shape.
export async function sendChat(messages: ChatMessage[]): Promise<string> {
  const res = await fetch(CHAT_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });
  const data = (await res.json()) as { content?: Array<{ text?: string }> };
  return (
    data.content?.[0]?.text ??
    "I'm having trouble connecting right now. Please email henry@syntrexio.com directly."
  );
}
