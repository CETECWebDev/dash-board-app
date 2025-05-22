export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    try {
      const { id } = req.query;

      if (!id) {
        return res.status(400).json({ message: 'ID is required' });
      }

      const response = await fetch(`http://89.235.119.239/gateway/employees/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const text = await response.text();
      const data = text ? JSON.parse(text) : {};

      if (response.ok) {
       
        res.status(200).json({ message: 'User Deleted' });
      } else {
        res.status(response.status).json({ message: 'Something went wrong', error: data });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
