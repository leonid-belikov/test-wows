import { ApiService } from 'services'
import type { NationApiResponse } from './nationApiInterfaces.ts'
import { nationResponseAdapter } from './nationApiAdapters.ts'

const DATA_URL = 'nations/'

export const fetchData = async () => {
  const { data } = await ApiService.apiInstance.get<NationApiResponse>(DATA_URL)
  return nationResponseAdapter(data)
}
