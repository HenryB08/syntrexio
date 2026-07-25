import { useEffect, useRef, useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { sendChat, type ChatMessage } from "@/lib/site";

export function ChatBubble() {
  const [open, setOpen] = useState(false);
  const [thinking, setThinking] = useState(false);
  const [preview, setPreview] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Keep the transcript pinned to the latest message.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, thinking]);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || thinking) return;
    const next: ChatMessage[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setThinking(true);
    try {
      const reply = await sendChat(next);
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting right now. Please email henry@syntrexio.com directly.",
        },
      ]);
    } finally {
      setThinking(false);
    }
  }

  // Every ~30s, if closed, flash a small typing-dots preview for 2.4s.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (open) return;
      setPreview(true);
      window.setTimeout(() => setPreview(false), 2400);
    }, 30000);
    return () => window.clearInterval(id);
  }, [open]);

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <div
        className={`relative w-[min(22rem,calc(100vw-2.5rem))] origin-bottom-right rounded-2xl border border-hairline bg-surface shadow-2xl shadow-black/50 ${
          open
            ? "pointer-events-auto chat-spring-in"
            : "pointer-events-none scale-95 opacity-0 transition-all duration-200 ease-out"
        }`}
      >
        {thinking ? <span className="edge-shimmer" aria-hidden /> : null}
        <div className="flex items-center gap-3 border-b border-hairline bg-surface-2 px-4 py-3">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-accent-foreground text-xs font-bold">
            S
          </span>
          <div className="flex-1">
            <div className="text-sm font-semibold text-foreground">Syntrex</div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {thinking ? "Thinking…" : "Replies in seconds"}
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="grid h-7 w-7 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
            aria-label="Close chat"
          >
            <X size={14} />
          </button>
        </div>

        <div ref={scrollRef} className="max-h-80 space-y-3 overflow-y-auto px-4 py-4">
          <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-background px-3.5 py-2.5 text-sm text-foreground">
            Hey! I'm the Syntrex assistant. Ask about the Growth System or book
            a Free Leak Audit.
          </div>
          {messages.map((m, i) => (
            <div
              key={i}
              className={
                m.role === "user"
                  ? "ml-auto max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-tr-sm bg-accent px-3.5 py-2.5 text-sm text-accent-foreground"
                  : "max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-tl-sm bg-background px-3.5 py-2.5 text-sm text-foreground"
              }
            >
              {m.content}
            </div>
          ))}
          {thinking ? (
            <div className="inline-flex items-center gap-1.5 rounded-2xl rounded-tl-sm bg-background px-3.5 py-3">
              <span className="think-dot h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="think-dot h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="think-dot h-1.5 w-1.5 rounded-full bg-accent" />
            </div>
          ) : null}
        </div>

        <form
          className="flex items-center gap-2 border-t border-hairline p-3"
          onSubmit={handleSend}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question…"
            aria-label="Ask the Syntrex assistant a question"
            className="flex-1 rounded-md border border-hairline bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent/60 focus:outline-none"
          />
          <button
            type="submit"
            disabled={thinking}
            className="grid h-9 w-9 place-items-center rounded-md bg-accent text-accent-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            aria-label="Send"
          >
            <Send size={14} />
          </button>
        </form>
      </div>

      <button
        onClick={() => setOpen((o) => !o)}
        className="group pointer-events-auto relative grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/40 chat-breathe"
        aria-label="Open chat"
      >
        {open ? <X size={20} /> : <MessageSquare size={20} />}
        {preview && !open ? (
          <span className="pointer-events-none absolute -top-2 -left-2 inline-flex items-center gap-1 rounded-full border border-hairline bg-background px-2 py-1 shadow-lg">
            <span className="think-dot h-1 w-1 rounded-full bg-foreground" />
            <span className="think-dot h-1 w-1 rounded-full bg-foreground" />
            <span className="think-dot h-1 w-1 rounded-full bg-foreground" />
          </span>
        ) : null}
      </button>
    </div>
  );
}