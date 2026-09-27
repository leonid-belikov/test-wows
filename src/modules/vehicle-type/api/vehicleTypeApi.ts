import { ApiService } from 'services'
import type { VehicleTypeResponse } from './vehicleTypeApiInterfaces.ts'
import { vehicleTypeResponseAdapter } from './vehicleTypeApiAdapters.ts'

const DATA_URL = 'vehicle_types_common/'

export const fetchData = async () => {
  const { data } = await ApiService.apiInstance.get<VehicleTypeResponse>(DATA_URL)
  return vehicleTypeResponseAdapter(data)
}
