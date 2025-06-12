import L from 'leaflet'

const generateMap = (mapRef , theme , darkmap , lightmap) => {

    mapRef.current = L.map('map').setView([37.1652, 49.6847], 8);
    L.tileLayer(
        // `${theme.theme === 'dark' ? darkmap : lightmap}?api_key=2caa2f4f-00f2-47a0-ba76-37bf1e0f7940`
        `${theme.theme === 'dark' ? darkmap : lightmap}`
    ).addTo(mapRef.current);
   

}

export default generateMap