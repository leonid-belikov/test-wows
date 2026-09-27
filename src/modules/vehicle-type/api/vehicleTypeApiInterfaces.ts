import { type Dictionary } from 'modules/locale/model'
import { VehicleTypeName } from '../model'

interface VehicleTypeResponseValue {
  icons: {
    default: string
    elite: string
    premium: string
    special: string
    normal: string
  }
  sort_order: number
  localization: {
    mark: Dictionary
  }
}

export type VehicleTypeResponse = Record<VehicleTypeName, VehicleTypeResponseValue>
