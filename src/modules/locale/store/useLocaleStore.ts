import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type Dictionary, Locale } from 'modules/locale/model'

interface LocaleStore {
  selectedLocale: Locale
  setLocale: (locale: Locale) => void
  getTranslation: (dictionary: Dictionary) => string
}

export const useLocaleStore = create<LocaleStore>()(
  persist(
    (set, get) => {
      const getTranslationFabric = () => (dictionary: Dictionary) =>
        dictionary[get().selectedLocale]

      return {
        selectedLocale: Locale.EN,
        setLocale: (value: Locale) => {
          set({
            selectedLocale: value,
            getTranslation: getTranslationFabric(),
          })
        },
        getTranslation: getTranslationFabric(),
      }
    },
    {
      name: 'localeStore',
    },
  ),
)
