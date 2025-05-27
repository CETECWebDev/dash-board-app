import React, { useEffect, useRef } from 'react'
import L, { map } from 'leaflet'
import { useTheme } from 'next-themes'
import { getBlinkingIcon } from '@/lib/getBlinkingIcon';
import { getLocIcon } from '@/lib/getLocIcon';

export default function MapView({ devices, selectedDevice, setSelectedDevice, type , setLatOnMap , setLongOnMap }) {

    const theme = useTheme()
    const mapRef = useRef(null);
    const markersRef = useRef([]);
    const clickMarkerRef = useRef(null);
    const darkmap = `https://img-proxy-five.vercel.app/image-proxy?url=https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png`
    const lightmap = `https://img-proxy-five.vercel.app/image-proxy?url=https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png`


    useEffect(() => {

        // map init once

        mapRef.current = L.map('map').setView([37.1652, 49.6847], 8);
        L.tileLayer(
            `${theme.theme === 'dark' ? darkmap : lightmap}?api_key=2caa2f4f-00f2-47a0-ba76-37bf1e0f7940`
        ).addTo(mapRef.current);
        return () => {
            mapRef.current.remove();
        }




    }, [theme])






    useEffect(() => {


        if (type === 'monitoring') {
            markersRef.current.forEach(marker => {
                marker.remove();
            });
            markersRef.current = [];

            devices.forEach(device => {
                const icon = getBlinkingIcon(device.status, selectedDevice.id === device.id);
                const marker = L.marker([device.lat, device.long], { icon }).addTo(mapRef.current);

                marker.on('click', () => {
                    setSelectedDevice(device);
                });

                markersRef.current.push(marker);
            });

        }

        else {
            if (!mapRef.current) return;

            if (clickMarkerRef.current) {
                mapRef.current.removeLayer(clickMarkerRef.current);
                clickMarkerRef.current = null;
            }

            mapRef.current.off('click');


            mapRef.current.on('click', function (e) {

                const lat = e.latlng.lat;
                const lng = e.latlng.lng;

                const icon = getLocIcon()

                console.log('Latitude: ' + lat + ', Longitude: ' + lng);

                if (clickMarkerRef.current) {
                    mapRef.current.removeLayer(clickMarkerRef.current);
                }


                const marker = L.marker([lat, lng], { icon })
                    .addTo(mapRef.current)
                    .bindPopup(`  Location : ${lat.toFixed(5)}, ${lng.toFixed(5)}`)
                    .openPopup();


                setLatOnMap(lat)
                setLongOnMap(lng)    

                clickMarkerRef.current = marker;

            })
        }


    }, [selectedDevice, theme]);



    return (
        <div id="map" className={`w-[100%] ${type === 'monitoring' ? 'lg:w-[75%]' : 'w-full'}  h-[50dvh] lg:h-auto transform-gpu rounded-xl z-0  ${theme.theme === 'dark' ? 'border-zinc-600 border-2 shadow-md' : 'shadow-md'} relative`} >
        </div>
    )
}
