import { create } from "zustand";

const useLocation = create((set) => ({

    lat: 0,
    long: 0,
    setLat: (newLat) => set(() => ({ lat: newLat })),
    setLong: (newLong) => set(() => ({ long: newLong }))

}))


export default useLocation;