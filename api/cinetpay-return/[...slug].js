export default async function handler(req, res) {
  // req.query.slug est un tableau des segments
  const { slug } = req.query;
  const dynamicPath = slug ? slug.join('/') : '';
  // URL finale vers ta page FlutterFlow
  const redirectUrl = `https://unircorn.net/${dynamicPath}`;

  if (req.method === 'POST' || req.method === 'GET') {
    // Redirection 302 vers la page dynamique
    return res.redirect(302, redirectUrl);
  }
  // Toute autre méthode : 405
  res.status(405).send('Method Not Allowed');
}
