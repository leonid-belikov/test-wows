import { ErrorService, QueryService } from 'services'
import { shipApi } from 'modules/ship/api'
import type { Ship } from 'modules/ship/model'
import { useShipStore } from '../store/useShipStore.ts'
import { useFilterStore } from '../store/useFilterStore.ts'
import { useLocaleStore } from '../../locale'

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

  const filteredData = useFilterStore.getState().filteredData
  const items = filteredData ?? data

  const index = items.findIndex((item) => item.id === ship.id)
  if (index === -1) {
    ErrorService.log('index not found', { tag: 'openShipDetails' })
    return
  }

  useShipStore.setState({
    openedShip: ship,
    openedShipIndex: index,
    hasPrev: index > 0,
    hasNext: index < items.length - 1,
  })
}

const selectAnotherShip = (delta: number) => {
  const openedShipIndex = useShipStore.getState().openedShipIndex

  const data = QueryService.getClient().getQueryData<Array<Ship>>(['ship'])
  if (!data) {
    ErrorService.log('data is not defined', { tag: 'selectAnotherShip' })
    return
  }

  const filteredData = useFilterStore.getState().filteredData
  const items = filteredData ?? data

  const index = openedShipIndex + delta
  const ship = items[index]

  useShipStore.setState({
    openedShip: ship,
    openedShipIndex: index,
    hasPrev: index > 0,
    hasNext: index < items.length - 1,
  })
}

export const selectNextShip = () => {
  selectAnotherShip(1)
}

export const selectPrevShip = () => {
  selectAnotherShip(-1)
}

const applyFilters = () => {
  const data = QueryService.getClient().getQueryData<Array<Ship>>(['ship'])
  if (!data) {
    ErrorService.log('data is not defined', { tag: 'applyFilters' })
    return
  }

  let result = data

  const search = useFilterStore.getState().search.toLowerCase()
  const getTranslation = useLocaleStore.getState().getTranslation

  if (search) {
    result = result.filter((item) =>
      getTranslation(item.nameDictionary).toLowerCase().includes(search),
    )
  }

  const wasFiltered = result.length !== data.length

  useFilterStore.setState({
    filteredData: wasFiltered ? result : null,
  })
}

export const setSearchQuery = (search: string) => {
  useFilterStore.setState({ search })
  applyFilters()
}

export const clearSearchQuery = () => {
  useFilterStore.setState({ search: '' })
  applyFilters()
}
