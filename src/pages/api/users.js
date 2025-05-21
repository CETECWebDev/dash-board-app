// pages/api/users.js
export default async function handler(req, res) {

    const { name, email } = req.body

    if (req.method === 'POST') {
        try {
            const response = await fetch('http://89.235.119.239/gateway/employees/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name , email})
            });

            const data = await response.json();

            if (response.status === 201) {
                res.status(201).json({ message: 'User Created', data });
            } else {
                res.status(response.status).json({ message: 'Something went wrong', error: data });
            }

        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
