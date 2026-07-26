import { useCallback, useEffect, useRef, useState, type ComponentType } from "react";
import {
  MessageCircle,
  PhoneCall,
  Repeat,
  CalendarCheck,
  Receipt,
  type LucideIcon,
} from "lucide-react";
import { Icon3D } from "./Icon3D";

type Motif = ComponentType;

function Waveform() {
  return (
    <svg viewBox="0 0 200 40" className="h-10 w-full text-foreground/80">
      {Array.from({ length: 40 }).map((_, i) => {
        const h = Math.round((4 + Math.abs(Math.sin(i * 0.6)) * 30) * 100) / 100;
        const y = Math.round((20 - h / 2) * 100) / 100;
        return <rect key={i} x={i * 5} y={y} width="2" height={h} fill="currentColor" opacity={0.7} />;
      })}
    </svg>
  );
}
function InboxRows() {
  return (
    <div className="space-y-1.5">
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex items-center gap-2 rounded-md border border-hairline bg-background/60 px-2 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
          <span className="h-2 flex-1 rounded bg-foreground/25" style={{ width: `${60 + i * 10}%` }} />
          <span className="ticker-mono text-[10px] text-muted-foreground">{2 + i}s</span>
        </div>
      ))}
    </div>
  );
}
function TimelineDots() {
  return (
    <div className="flex items-center gap-1.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <div key={i} className="flex items-center gap-1.5">
          <span className="grid h-4 w-4 place-items-center rounded-full border border-hairline bg-background text-[8px] text-foreground">{i + 1}</span>
          {i < 4 ? <span className="h-px w-8 bg-hairline" /> : null}
        </div>
      ))}
    </div>
  );
}
function CalendarGrid() {
  return (
    <div className="grid grid-cols-7 gap-1">
      {Array.from({ length: 21 }).map((_, i) => {
        const on = [4, 9, 12, 17].includes(i);
        return (
          <div key={i} className={`h-4 rounded-sm border border-hairline ${on ? "bg-foreground/70" : "bg-background/40"}`} />
        );
      })}
    </div>
  );
}
function ReceiptLines() {
  return (
    <div className="space-y-1.5 rounded-md border border-hairline bg-background/60 p-2.5">
      {[80, 60, 90, 50].map((w, i) => (
        <div key={i} className="flex items-center justify-between gap-2">
          <span className="h-1.5 rounded bg-foreground/25" style={{ width: `${w}%` }} />
          <span className="ticker-mono text-[10px] text-muted-foreground">${(120 + i * 45).toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
}

type SystemItem = {
  icon: LucideIcon;
  title: string;
  line: string;
  full: string;
  Motif: Motif;
};

const items: SystemItem[] = [
  {
    icon: MessageCircle,
    title: "Instant Answer",
    line: "AI replies to every inquiry in under 10 seconds, 24/7.",
    full: "Every web chat, SMS, and DM is answered in seconds by a trained AI concierge that speaks like your best rep, day, night, weekends.",
    Motif: Waveform,
  },
  {
    icon: PhoneCall,
    title: "Never-Miss Capture",
    line: "Missed calls trigger an instant SMS with the caller's name.",
    full: "The moment a call goes unanswered, the caller receives a friendly SMS with their name and a link to book, before they call your competitor.",
    Motif: InboxRows,
  },
  {
    icon: Repeat,
    title: "Automatic Follow-Up",
    line: "Multi-touch sequences until the lead books or opts out.",
    full: "A polite, timed sequence of SMS, email, and voice touchpoints keeps every warm lead engaged until they book or explicitly opt out.",
    Motif: TimelineDots,
  },
  {
    icon: CalendarCheck,
    title: "Booking Integrity",
    line: "Qualified leads self-book, validated so a booking is never invented.",
    full: "Qualified leads land on your calendar with the right service, duration, and reminders. Every booking is checked against real calendar availability, so the system never invents one, no back-and-forth, no double-booking.",
    Motif: CalendarGrid,
  },
  {
    icon: Receipt,
    title: "Live Dashboard & Receipt",
    line: "Watch dollars recovered climb live, formalized each month in the Receipt.",
    full: "Watch recovered value climb on a live dashboard: the bookings the system produced times the job values you confirm at install, shown with the booking count beside the dollar figure. It is an estimate of revenue booked, never closed cash and never an industry average. The monthly Receipt is its formal statement, and the guarantee pays out on the Receipt.",
    Motif: ReceiptLines,
  },
];

export function GrowthSystem() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const toggle = useCallback((i: number) => {
    setExpanded((cur) => (cur === i ? null : i));
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const nodes = el.querySelectorAll<HTMLElement>("[data-choreo]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
      {items.map((s, i) => {
        const mid = (items.length - 1) / 2;
        const dx = (i - mid) * 50;
        const open = expanded === i;
        const Motif = s.Motif;
        return (
          <div
            key={s.title}
            data-choreo
            data-expanded={open}
            role="button"
            tabIndex={0}
            aria-expanded={open}
            onClick={() => toggle(i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggle(i);
              }
            }}
            className={`growth-card spread-in surface-card surface-card-hover group h-full p-6 ${
              open ? "lg:col-span-2" : ""
            }`}
            style={{
              ["--sx" as never]: `${dx}px`,
              ["--d" as never]: `${i * 90}ms`,
            }}
          >
            <div data-parallax="icon">
              <Icon3D icon={s.icon} size={44} iconSize={20} />
            </div>
            <div data-parallax="text" className="mt-5 text-[15px] font-semibold text-foreground">
              {s.title}
            </div>
            <p data-parallax="text" className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {s.line}
            </p>

            <div className="growth-card-inner mt-4">
              <div className="border-t border-hairline pt-4">
                <Motif />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.full}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-foreground">
                  See it in the audit
                  <span aria-hidden>→</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}