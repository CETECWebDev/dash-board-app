import { create } from "zustand";

const useAppStore = create((set) => ({

    isSideBarOpen: true , 
    toggleSideBar: () => set( (state) => ({ isSideBarOpen: !state.isSideBarOpen }) )

}))


export default useAppStore;