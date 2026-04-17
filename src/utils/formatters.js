export function formatPosterUrl(poster) {
  return poster || "https://placehold.co/600x900/1b1733/e9dcff?text=No+Poster";
}

export function toTitleCase(value = "") {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
