import L from 'leaflet';
import getLocIcon from './getLocIcon'; 

const handleMapClickMarker = ({ mapRef, clickMarkerRef, setLat, setLong }) => {
    if (!mapRef.current) return;


    if (clickMarkerRef.current) {
        mapRef.current.removeLayer(clickMarkerRef.current);
        clickMarkerRef.current = null;
    }

    mapRef.current.off('click');

 
    mapRef.current.on('click', function (e) {
        const lat = e.latlng.lat;
        const lng = e.latlng.lng;

        const icon = getLocIcon();


        if (clickMarkerRef.current) {
            mapRef.current.removeLayer(clickMarkerRef.current);
        }

        const marker = L.marker([lat, lng], { icon })
            .addTo(mapRef.current)
            .bindPopup(`  Location : ${lat.toFixed(5)}, ${lng.toFixed(5)}`)
            .openPopup();

        setLat(lat);
        setLong(lng);

        clickMarkerRef.current = marker;
    });
};

export default handleMapClickMarker;