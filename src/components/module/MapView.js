import React, { useEffect, useRef } from 'react'
import L from 'leaflet'
import { useTheme } from 'next-themes'
import { getBlinkingIcon } from '@/lib/getBlinkingIcon';

export default function MapView({ devices, selectedDevice, setSelectedDevice }) {

    const theme = useTheme()
    const mapRef = useRef(null);
    const markersRef = useRef([]);

    const darkmap = `https://img-proxy-five.vercel.app/image-proxy?url=https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png`
    const lightmap = `https://img-proxy-five.vercel.app/image-proxy?url=https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png`


    useEffect(() => {

        // map init once

        mapRef.current = L.map('map').setView([37.2808, 49.5832], 13);
        L.tileLayer(
            `${theme.theme === 'dark' ? darkmap : lightmap}?api_key=2caa2f4f-00f2-47a0-ba76-37bf1e0f7940`
        ).addTo(mapRef.current);
        return () => {
            mapRef.current.remove();
        }

    }, [theme])


    useEffect(() => {

        markersRef.current.forEach(marker => {
            marker.remove();
        });
        markersRef.current = [];




        devices.forEach(device => {
            const icon = getBlinkingIcon(device.active, selectedDevice.id === device.id);
            const marker = L.marker([device.lat, device.lng], { icon }).addTo(mapRef.current);

            marker.on('click', () => {
                setSelectedDevice(device);
            });

            markersRef.current.push(marker);
        });

    }, [selectedDevice, theme]);



    return (
        <div id="map" className={`w-[100%] h-[50dvh] lg:h-[90dvh] transform-gpu rounded-xl z-0  ${theme.theme === 'dark' ? 'border-zinc-600 border-2 shadow-md' : 'shadow-md'} `} />
    )
}
