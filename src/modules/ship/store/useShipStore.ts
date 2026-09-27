import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Ship } from 'modules/ship/model'

interface ShipStore {
  openedShip: Ship | null
  openShipDetails: (ship: Ship) => void
  closeShipDetails: () => void
}

export const useShipStore = create<ShipStore>()(
  persist(
    (set) => ({
      openedShip: null,
      openShipDetails: (ship: Ship) => {
        set({ openedShip: ship })
      },
      closeShipDetails: () => {
        set({ openedShip: null })
      },
    }),
    {
      name: 'shipStore',
    },
  ),
)
