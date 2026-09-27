import { ApiService } from 'services'
import type { ShipApiResponse } from './shipApiInterfaces'
import { shipResponseAdapter } from './shipApiAdapters.ts'

const DATA_URL = 'vehicles/'

export const fetchData = async () => {
  const { data } = await ApiService.apiInstance.get<ShipApiResponse>(DATA_URL)
  return shipResponseAdapter(data)
}
