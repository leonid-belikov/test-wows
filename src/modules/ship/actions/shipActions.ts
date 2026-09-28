import { ErrorService, QueryService } from 'services'
import { shipApi } from 'modules/ship/api'
import type { Ship } from 'modules/ship/model'
import { useShipStore } from '../store/useShipStore.ts'

export const fetchDataManually = () => {
  QueryService.getClient().query({
    queryKey: ['ship'],
    queryFn: shipApi.fetchData,
    staleTime: 'static',
  })
}

export const openShipDetails = (ship: Ship) => {
  const data = QueryService.getClient().getQueryData<Array<Ship>>(['ship'])
  if (!data) {
    ErrorService.log('data is not defined', { tag: 'openShipDetails' })
    return
  }

  const index = data.findIndex((item) => item.id === ship.id)
  if (index === -1) {
    ErrorService.log('index not found', { tag: 'openShipDetails' })
    return
  }

  useShipStore.setState({
    openedShip: ship,
    openedShipIndex: index,
    hasPrev: index > 0,
    hasNext: index < data.length - 1,
  })
}

const selectShip = (delta: number) => {
  const openedShipIndex = useShipStore.getState().openedShipIndex

  const data = QueryService.getClient().getQueryData<Array<Ship>>(['ship'])
  if (!data) {
    ErrorService.log('data is not defined', { tag: 'selectShip' })
    return
  }

  const index = openedShipIndex + delta
  const ship = data[index]

  useShipStore.setState({
    openedShip: ship,
    openedShipIndex: index,
    hasPrev: index > 0,
    hasNext: index < data.length - 1,
  })
}

export const selectNextShip = () => {
  selectShip(1)
}

export const selectPrevShip = () => {
  selectShip(-1)
}
