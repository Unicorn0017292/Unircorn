export default async function handler(req, res) {
  const { slug } = req.query;  // ['join', '7jucil']

  const dynamicPath = slug ? slug.join('/') : '';

  const redirectUrl = `https://unircorn.net/${dynamicPath}`;

  if (req.method === 'POST' || req.method === 'GET') {
    return res.redirect(302, redirectUrl);
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
