import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface LocaleStore {
  selectedLocale: string
}

export const useLocaleStore = create<LocaleStore>()(
  persist(
    (set) => ({
      selectedLocale: 'en',
      setLocale: (value: string) => {
        set({ selectedLocale: value })
      },
    }),
    {
      name: 'localeStore',
    },
  ),
)
