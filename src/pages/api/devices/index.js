const handler = async (req, res) => {

    if (req.method === 'POST') {

        try {

            const device  = req.body

            const response = await fetch(`http://89.235.119.239/gateway/device/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(device)
            })

            if (response.status === 201) {

                return res.status(201).json('device created')

            } else {

                return res.status(422).json('something went wrong')

            }



        } catch (error) {

            res.status(500).json({ message: 'Server error', error });

        }



    }

    else {
        return res.status(422).json('method is not allowed')
    }


}

export default handler