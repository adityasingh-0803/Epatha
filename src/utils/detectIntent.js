export function detectIntent(prompt) {
  const text = prompt.toLowerCase();
  if (text.includes("remind") || text.includes("reminder")) return "reminder";
  if (text.includes("plan") || text.includes("schedule")) return "planner";
  if (text.includes("journal") || text.includes("diary")) return "journal";
  return "unknown";
}
