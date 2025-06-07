const addToSelectedDevice = (devices , clickedDevice, setDevices, selectedDevices, setSelectedDevices) => {

    const allDevices = [...devices]

    const newAllDevices = allDevices.filter(device => {
        return device.id !== clickedDevice.id
    })

    setDevices(newAllDevices)

    const newList = [...selectedDevices, clickedDevice]

    setSelectedDevices(newList)

}

const removeFromSelectedDevice = (devices , clickedDevice, setDevices, selectedDevices, setSelectedDevices) => {
    const allSelectedDevices = [...selectedDevices]

    const newSelectedDevices = allSelectedDevices.filter(device => {
        return device.id !== clickedDevice.id
    })

    setSelectedDevices(newSelectedDevices)

    const newAllList = [clickedDevice, ...devices].sort((a, b) => a.id - b.id)

    setDevices(newAllList)

}


export { addToSelectedDevice, removeFromSelectedDevice }