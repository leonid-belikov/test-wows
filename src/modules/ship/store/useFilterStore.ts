import type { Ship } from 'modules/ship/model'
import { VehicleTypeName } from 'modules/vehicle-type/model'
import { NationName } from 'modules/nation/model'
import { create } from 'zustand'

interface FilterStore {
  filteredData: Array<Ship> | null
  search: string
  vehicleType: Record<VehicleTypeName, boolean>
  level: Record<number, boolean>
  nation: Record<NationName, boolean>
}

export const useFilterStore = create<FilterStore>(() => ({
  filteredData: null,
  search: '',
  vehicleType: {
    [VehicleTypeName.AIR_CARRIER]: false,
    [VehicleTypeName.CRUISER]: false,
    [VehicleTypeName.BATTLESHIP]: false,
    [VehicleTypeName.DESTROYER]: false,
    [VehicleTypeName.SUBMARINE]: false,
  },
  level: {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
  },
  nation: {
    [NationName.COMMONWEALTH]: false,
    [NationName.USA]: false,
    [NationName.EUROPE]: false,
    [NationName.UK]: false,
    [NationName.FRANCE]: false,
    [NationName.GERMANY]: false,
    [NationName.ITALY]: false,
    [NationName.JAPAN]: false,
    [NationName.NETHERLANDS]: false,
    [NationName.PAN_AMERICA]: false,
    [NationName.PAN_ASIA]: false,
    [NationName.SPAIN]: false,
    [NationName.USSR]: false,
  },
}))
