import { useQuery } from '@tanstack/react-query'
import { nationApi } from 'modules/nation/api'

export const useNation = () =>
  useQuery({
    queryKey: ['nation'],
    queryFn: nationApi.fetchData,
    staleTime: 'static',
  })
