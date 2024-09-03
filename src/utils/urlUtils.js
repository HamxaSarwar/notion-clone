export function isValidInstagramUrl(url) {
  // This is a basic check. You might want to implement a more robust validation
  const instagramRegex = /^https?:\/\/(www\.)?instagram\.com\/.+/i;
  return instagramRegex.test(url);
}