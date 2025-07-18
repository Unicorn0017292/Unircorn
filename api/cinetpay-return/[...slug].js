export default async function handler(req, res) {
  const { slug } = req.query;
  const dynamicPath = slug ? slug.join('/') : '';
  const redirectUrl = `https://unircorn.net/${dynamicPath}`;
  return res.redirect(302, redirectUrl);
}
