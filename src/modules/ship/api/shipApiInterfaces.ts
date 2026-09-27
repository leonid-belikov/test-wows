import { NationName } from 'modules/nation/model'
import { type Dictionary } from 'modules/locale/model'
import { VehicleTypeName } from '../../vehicle-type/model'

export interface ShipApiInterface {
  level: number
  name: string
  icons: {
    local_contour: string
    contour_alive: string
    medium: string
    default: string
    local_small: string
    contour_dead: string
    large: string
    local_contour_dead: string
    local_contour_alive: string
    small: string
    contour: string
  }
  tags: [VehicleTypeName]
  localization: {
    mark: Dictionary
    shortmark: Dictionary
    description: Dictionary
  }
  nation: NationName
}

export type ShipApiResponse = Record<string, ShipApiInterface>
