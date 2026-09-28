import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface MqState {
  isHiddenSidebar: boolean
  toggleSidebar: () => void
}

export const useLayoutStore = create<MqState>()(
  persist(
    (set, get) => ({
      isHiddenSidebar: true,
      toggleSidebar: () => {
        set({ isHiddenSidebar: !get().isHiddenSidebar })
      },
    }),
    {
      name: 'mqStore',
    },
  ),
)
