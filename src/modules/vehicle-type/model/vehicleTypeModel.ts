import { Locale } from 'modules/locale/model'

export const enum VehicleTypeName {
  CRUISER = 'Cruiser',
  AIR_CARRIER = 'AirCarrier',
  BATTLESHIP = 'Battleship',
  DESTROYER = 'Destroyer',
  SUBMARINE = 'Submarine',
}

export interface VehicleTypeValue {
  iconPath: string
  nameDictionary: Record<Locale, string>
}

export type VehicleTypeData = Record<VehicleTypeName, VehicleTypeValue>
