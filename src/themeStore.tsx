import { create, StateCreator } from 'zustand'
import { persist } from 'zustand/middleware'

type Theme = 'light' | 'dark'
type ThemeStore = {
    theme: Theme
    toggleTheme: () => void
}

const themeSlice: StateCreator<ThemeStore> = (set) => ({
    theme: 'light',
    toggleTheme: () =>
        set((state) => ({
            theme: state.theme === 'light' ? 'dark' : 'light',
        })),
})

const useThemeStore = create<ThemeStore>()(
    persist(themeSlice, {
        name: 'theme-storage',
    })
)

export default useThemeStore
