import L from 'leaflet';
import getBlinkingIcon from './getBlinkingIcon' 

const renderMarkers = ({ mapRef, markersRef, devices, selectedDevice, setSelectedDevice }) => {
    
    markersRef.current.forEach(marker => {
        marker.remove();
    })

    markersRef.current = []

  
    devices.forEach(device => {
        const icon = getBlinkingIcon(device.status, selectedDevice?.id === device.id)
        const marker = L.marker([device.lat, device.long], { icon }).addTo(mapRef.current)

        marker.on('click', () => {
            setSelectedDevice(device)
        });

        markersRef.current.push(marker)
    })
}

export default renderMarkers;