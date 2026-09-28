import type { Ship } from 'modules/ship/model'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserStore {
  selectedShip: Ship | null
  setSelectedShip: (selectedShip: Ship) => void
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      selectedShip: null,
      setSelectedShip: (selectedShip: Ship | null) => {
        set({ selectedShip })
      },
    }),
    {
      name: 'userStore',
    },
  ),
)
