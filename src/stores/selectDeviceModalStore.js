import { create } from "zustand";

const useSelectDeviceModal = create((set) => ({

    isModalOpen: false , 
    toggleModal: () => set( (state) => ({ isModalOpen: !state.isModalOpen }) )

}))


export default useSelectDeviceModal;