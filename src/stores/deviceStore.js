import { create } from "zustand";

const useDevices = create((set) => ({

    devices: [],
    setDevices: (newDevices) => set(() => ({devices: newDevices})),

    selectedDevice: {},
    setSelectedDevice: (newDevice) => set(() => ({ selectedDevice: newDevice })),

    selectedDevices: [],
    setSelectedDevices: (newDevices) => set(() => ({ selectedDevices: newDevices })),

}))


export default useDevices;