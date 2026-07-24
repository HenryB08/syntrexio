export async function submitForm(data: Record<string, unknown>) {
  // Placeholder: no backend yet. To be wired to an external endpoint later.
  await new Promise((r) => setTimeout(r, 600));
  console.log("[Syntrex form submission]", data);
  return { ok: true };
}