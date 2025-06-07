import { create } from "zustand";

const useMapModal = create((set) => ({

    isMapModalOpen: false , 
    toggleMapModalOpen: () => set( (state) => ({ isMapModalOpen: !state.isMapModalOpen }) )

}))


export default useMapModal;