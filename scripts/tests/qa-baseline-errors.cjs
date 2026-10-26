/* Narrow, explicit baseline network diagnostics. Never ignore page errors.
   These predate complete-only display enforcement; log every occurrence. */
module.exports = function knownBaselineNetwork(message, base) {
  if (!/Failed to load resource:.*404/.test(message.text())) return false;
  const url = message.location().url;
  if (url === new URL('assets/prompts.js', base).href) return true;
  return /^https:\/\/t[0-3]\.gstatic\.com\/faviconV2\?/.test(url) &&
    /url=http:\/\/www\.(mimikuodeemer\.com|onlinetaichiworkshops\.com)&size=64$/.test(url);
};
