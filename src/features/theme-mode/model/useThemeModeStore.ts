import { create } from 'zustand';

type ThemeModeState = {
  mode: 'light' | 'dark';
  toggleMode: () => void;
};

export const useThemeModeStore = create<ThemeModeState>((set) => ({
  mode: 'light',
  toggleMode: () => set((state) => ({ mode: state.mode === 'light' ? 'dark' : 'light' })),
}));
