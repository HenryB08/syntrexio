const EVENTS = [
  "Agent · research complete",
  "GEO citation · +1 query",
  "Content published · on schedule",
  "Ranking up · target term",
  "Workflow automated",
  "Report generated",
  "CRM record synced",
  "Draft ready · human review",
  "Dashboard updated",
  "Email deliverability · pass",
  "Task queued · agent fleet",
  "Approval logged · human",
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
