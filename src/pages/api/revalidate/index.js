export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST method allowed' });
  }

  try {
    const { path } = req.body;

    if (!path) {
      return res.status(400).json({ message: 'Path is required' });
    }

    await res.revalidate(path);
    return res.status(200).json({ revalidated: true });

  } catch (err) {
    return res.status(500).json({ message: 'Revalidation error', error: err.message });
  }
}
