import { create } from "zustand";

const useDevices = create((set) => ({

    devices: [],
    setDevices: (newDevices) => set(() => ({devices: newDevices})),
    selectedDevice: {},
    setSelectedDevice: (newDevice) => set(() => ({ selectedDevice: newDevice }))

}))


export default useDevices;