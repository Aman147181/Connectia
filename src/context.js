import { create } from "zustand";

const useThemeStore = create((set) => ({

  loggedUser: null,
  setLoggedUser: (data) => set({loggedUser: data }),
  logout: () => set({ loggedUser: null }),


  darkTheme: true,
  toggleDarkTheme: () => {
    set((state) => ({ darkTheme: !state.darkTheme }));
  },
}));

export default useThemeStore;
