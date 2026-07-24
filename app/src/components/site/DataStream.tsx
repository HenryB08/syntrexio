const EVENTS = [
  "Call answered · 2.1s",
  "SMS reply sent",
  "Missed-call rescue · +1 lead",
  "Booked · 3:40 PM",
  "Follow-up sent · seq 2/4",
  "Voicemail transcribed",
  "Lead qualified · high-intent",
  "Chat handoff · agent",
  "Appointment confirmed",
  "Review request sent",
  "New inquiry · web form",
  "Reminder sent · 24h out",
];

function pillRow(offset = 0) {
  return EVENTS.concat(EVENTS).map((e, i) => (
    <span key={`${offset}-${i}`} className="data-pill">
      {e}
    </span>
  ));
}

export function DataStream() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 flex h-full flex-col justify-center gap-6"
    >
      <div className="data-track data-track-a">{pillRow(0)}</div>
      <div className="data-track data-track-b">{pillRow(1)}</div>
    </div>
  );
}