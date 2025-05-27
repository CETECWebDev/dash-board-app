
const fetchDevices = async () => {
    try {

        const res = await fetch('http://89.235.119.239/gateway/device/');
        const data = await res.json()
        return data

    } catch (err) {
        console.log('Error =>', err);
        return false
    }
}

export default fetchDevices