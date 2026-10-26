/* Functional tests must not depend on external decorative thumbnails/favicons.
   Local editorial artwork, JS, JSON, CSS and all actual content remain live.
   QA_LIVE_IMAGES=1 disables this fixture to diagnose external availability. */
module.exports = async function isolateRemoteImages(context, base) {
  if (process.env.QA_LIVE_IMAGES === '1') return;
  const origin = new URL(base).origin;
  await context.route('**/*', route => {
    const req = route.request();
    if (req.resourceType() === 'image' && /^https?:/.test(req.url()) &&
        new URL(req.url()).origin !== origin) {
      return route.fulfill({
        status: 200,
        contentType: 'image/svg+xml',
        body: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><rect width="64" height="64" fill="#e9e5d9"/></svg>'
      });
    }
    return route.continue();
  });
};
