import { useQuery } from '@tanstack/react-query'
import { vehicleTypeApi } from 'modules/vehicle-type/api'

export const useVehicleType = () =>
  useQuery({
    queryKey: ['vehicleType'],
    queryFn: vehicleTypeApi.fetchData,
    staleTime: 'static',
  })
