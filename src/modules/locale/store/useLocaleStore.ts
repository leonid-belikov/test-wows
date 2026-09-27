import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type Dictionary, Locale } from '../model'

interface LocaleStore {
  selectedLocale: Locale
  setLocale: (locale: Locale) => void
  getTranslation: (dictionary: Dictionary) => string
}

export const useLocaleStore = create<LocaleStore>()(
  persist(
    (set, get) => ({
      selectedLocale: Locale.EN,
      setLocale: (value: Locale) => {
        set({ selectedLocale: value })
      },
      getTranslation: (dictionary: Dictionary) => dictionary[get().selectedLocale],
    }),
    {
      name: 'localeStore',
    },
  ),
)
