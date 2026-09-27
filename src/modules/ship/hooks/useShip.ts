import { useQuery } from '@tanstack/react-query'
import { shipApi } from 'modules/ship/api'

export const useShip = () =>
  useQuery({
    queryKey: ['ship'],
    queryFn: shipApi.fetchData,
    staleTime: 'static',
  })
