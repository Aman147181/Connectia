import { create } from "zustand";

const useThemeStore = create((set) => ({
  darkTheme: true,
  isLoggedIn: false,
  toggleDarkTheme: () => {
    set((state) => ({ darkTheme: !state.darkTheme }));
  },
  setLogin: () => {
    set((state) => ({ isLoggedIn: !state.isLoggedIn   }));
  },
}));

export default useThemeStore;
