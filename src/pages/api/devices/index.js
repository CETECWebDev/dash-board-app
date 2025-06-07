import apiRequest from "@/api/axios-instance/main"
import axios from "axios"


const handler = async (req, res) => {

    if (req.method === 'POST') {

        try {
            const device = req.body;
            const response = await apiRequest.post('/device/', device);

            return res.status(response.status).json({ message: 'device created' });

        } catch (error) {
            console.error("Axios error:", error.response);


            if (error.response) {
                return res
                    .status(error.response.status)
                    .json('Request failed');
            }

            return res.status(500).json({ message: error.customMessage || 'Server error', error });
        }
    }


    else if (req.method === 'GET') {
        try {

            const response = await apiRequest.get('/device/')

            return res.status(200).json(response.data)

        } catch (error) {

            console.log(error);

            res.status(500).json({ message: 'Server error', error });

        }
    }


    else {

        return res.status(422).json('method is not allowed')

    }


}

export default handler