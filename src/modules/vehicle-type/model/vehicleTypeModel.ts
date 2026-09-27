import { type Dictionary } from 'modules/locale/model'

export enum VehicleTypeName {
  CRUISER = 'Cruiser',
  AIR_CARRIER = 'AirCarrier',
  BATTLESHIP = 'Battleship',
  DESTROYER = 'Destroyer',
  SUBMARINE = 'Submarine',
}

export interface VehicleTypeValue {
  iconPath: string
  nameDictionary: Dictionary
}

export type VehicleTypeData = Record<VehicleTypeName, VehicleTypeValue>
