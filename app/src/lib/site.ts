// Site integrations: contact/lead forms (Formspree) and the Syntrex chatbot
// (Cloudflare Worker). Both endpoints match the pre-cutover site exactly.

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkopyzln";
const CHAT_ENDPOINT = "https://syntrex-chat.henrybello.workers.dev";

// Submit a form to Formspree. Sends the given fields as JSON and resolves only
// on a 2xx response; the caller shows success/error UI.
export async function submitForm(data: Record<string, unknown>) {
  const res = await fetch(FORMSPREE_ENDPOINT, {
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
