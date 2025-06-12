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
    const darkmap = `https://img-proxy-five.vercel.app/image-proxy?url=https://tile.jawg.io/1897d8e5-896a-4810-903f-7412a3ebf053/{z}/{x}/{y}{r}.png?access-token=EfLfSbkM3LYg9bUUgZ3Xf0WwziMEBxWWud750wkLZ60Hz4dl14n0XiZIUy8g53Oi`
    const lightmap = `https://img-proxy-five.vercel.app/image-proxy?url=https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=2caa2f4f-00f2-47a0-ba76-37bf1e0f7940`


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
        <div id="map" className={`w-[100%] h-[100%] transform-gpu rounded-xl z-0  ${theme.theme === 'dark' ? 'border-zinc-600 border-2 shadow-md' : 'shadow-md'} relative`} >
          
        </div>
    )
}
