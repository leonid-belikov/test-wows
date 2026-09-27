import { QueryService } from 'services'
import { shipApi } from 'modules/ship/api'

export const fetchDataManually = () => {
  QueryService.getClient().query({
    queryKey: ['ship'],
    queryFn: shipApi.fetchData,
    staleTime: 'static',
  })
}
