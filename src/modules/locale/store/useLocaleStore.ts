import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Locale } from '../model'

interface LocaleStore {
  selectedLocale: Locale
  setLocale: (locale: Locale) => void
  getTranslation: (dictionary: Record<Locale, string>) => string
}

export const useLocaleStore = create<LocaleStore>()(
  persist(
    (set, get) => ({
      selectedLocale: Locale.EN,
      setLocale: (value: Locale) => {
        set({ selectedLocale: value })
      },
      getTranslation: (dictionary: Record<Locale, string>) => dictionary[get().selectedLocale],
    }),
    {
      name: 'localeStore',
    },
  ),
)
