import { VehicleTypeName } from 'modules/vehicle-type/model'
import type { Dictionary } from 'modules/locale/model'
import { NationName } from 'modules/nation/model'

export const enum ShipIconSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export interface Ship {
  id: string
  level: number
  iconPath: {
    [ShipIconSize.SMALL]: string
    [ShipIconSize.MEDIUM]: string
    [ShipIconSize.LARGE]: string
  }
  type: VehicleTypeName
  nation: NationName
  nameDictionary: Dictionary
  descriptionDictionary: Dictionary
}

export type ShipData = Record<string, Ship>
