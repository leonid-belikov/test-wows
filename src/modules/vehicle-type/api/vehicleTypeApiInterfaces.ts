import { Locale } from 'modules/locale/model'
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
    mark: Record<Locale, string>
  }
}

export type VehicleTypeResponse = Record<VehicleTypeName, VehicleTypeResponseValue>
