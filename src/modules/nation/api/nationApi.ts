import { ApiService } from 'services'
import type { NationApiResponse } from './nationApiInterfaces'
import { nationResponseAdapter } from './nationApiAdapters'

const DATA_URL = 'nations/'

export const fetchData = async () => {
  const { data } = await ApiService.apiInstance.get<NationApiResponse>(DATA_URL)
  return nationResponseAdapter(data)
}
