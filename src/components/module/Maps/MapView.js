import React, { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
import generateMap from '@/utils/generateMap';
import renderMarkers from '@/utils/renderDeviceMarker';
import handleMapClickMarker from '@/utils/handleMapClickMarker';
import useLocation from '@/stores/locationStore';
import useAppStore from '@/stores/appStore';


export default function MapView(props) {

    const { devices, selectedDevice, setSelectedDevice, type } = props
    const { setLat, setLong } = useLocation()
    const { isSideBarOpen } = useAppStore()

    const theme = useTheme()
    const mapRef = useRef(null);
    const markersRef = useRef([]);
    const clickMarkerRef = useRef(null);
    const darkmap = `https://img-proxy-five.vercel.app/image-proxy?url=https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png`
    const lightmap = `https://img-proxy-five.vercel.app/image-proxy?url=https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png`


    useEffect(() => {

        generateMap(mapRef, theme, darkmap, lightmap)

        return () => {
            mapRef.current.remove();
        }


    }, [theme , isSideBarOpen])


    useEffect(() => {


        if (type === 'monitoring') {
            if (!mapRef.current) return;
            if (!devices || devices.length === 0) return;
            renderMarkers({ mapRef, markersRef, devices, selectedDevice, setSelectedDevice })
        }

        else {
            handleMapClickMarker({ mapRef, clickMarkerRef, setLat, setLong })
        }


    }, [selectedDevice, theme , isSideBarOpen]);



    return (
        <div id="map" className={`w-[100%] h-[60dvh]  lg:h-auto transform-gpu rounded-xl z-0  ${theme.theme === 'dark' ? 'border-zinc-600 border-2 shadow-md' : 'shadow-md'} relative`} >
        </div>
    )
}
