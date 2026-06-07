/** Escape user-supplied strings for safe HTML email output. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function formatMessageHtml(message: string): string {
  return escapeHtml(message).replace(/\r?\n/g, "<br>");
}
