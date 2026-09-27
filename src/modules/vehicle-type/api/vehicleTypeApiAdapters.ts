import type { VehicleTypeResponse } from './vehicleTypeApiInterfaces'
import { type VehicleTypeData, VehicleTypeName } from '../model'

export const vehicleTypeResponseAdapter = (response: VehicleTypeResponse): VehicleTypeData => {
  return Object.entries(response).reduce((acc, [_key, _value]) => {
    const key = _key as VehicleTypeName
    acc[key] = {
      iconPath: _value.icons.default,
      nameDictionary: _value.localization.mark,
    }
    return acc
  }, {} as VehicleTypeData)
}
