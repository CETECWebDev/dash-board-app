import React, { useEffect, useRef } from 'react'
import L from 'leaflet'

export default function MapView() {


    const darkmap = `https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png`
    const lightmap = `https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png`

    const mapRef = useRef(null);

    useEffect(() => {

        // map init once

        mapRef.current = L.map('map').setView([37.2808, 49.5832], 13);
        L.tileLayer(
            `${lightmap}?api_key=2caa2f4f-00f2-47a0-ba76-37bf1e0f7940`
        ).addTo(mapRef.current);
        return () => {
            mapRef.current.remove();
        }
    }, [])

    return (
        <div id="map" className='w-full h-[90dvh] border-2 shadow-md rounded-xl' />
    )
}
