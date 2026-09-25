import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface MqState {
  isHiddenSidebar: boolean
  toggleSidebar: () => void
}

export const useMqStore = create<MqState>()(
  persist(
    (set, get) => ({
      isHiddenSidebar: false,
      toggleSidebar: () => set({ isHiddenSidebar: !get().isHiddenSidebar }),
    }),
    {
      name: 'mqStore',
    },
  ),
)
