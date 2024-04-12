import { create } from 'zustand'

interface ThemeStore {
    theme: 'light' | 'dark'
    toggleTheme: () => void
}

const useThemeStore = create<ThemeStore>((set) => ({
    theme: (localStorage.getItem('theme') as 'light' | 'dark') || 'light',
    toggleTheme: () =>
        set((state) => ({
            theme: state.theme === 'light' ? 'dark' : 'light',
        })),
}))

export default useThemeStore
