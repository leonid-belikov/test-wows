import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Ship } from 'modules/ship/model'

interface ShipStore {
  openedShip: Ship | null
  openedShipIndex: number
  hasPrev: boolean
  hasNext: boolean
  closeShipDetails: () => void
  // pinned: Set<string>
}

export const useShipStore = create<ShipStore>()(
  persist(
    (set) => ({
      openedShip: null,
      openedShipIndex: -1,
      hasPrev: false,
      hasNext: false,
      closeShipDetails: () => {
        set({
          openedShip: null,
          openedShipIndex: -1,
        })
      },
    }),
    {
      name: 'shipStore',
    },
  ),
)
