import { ErrorService, QueryService } from 'services'
import { shipApi } from 'modules/ship/api'
import type { Ship } from 'modules/ship/model'
import { useShipStore } from '../store/useShipStore'
import { useFilterStore } from '../store/useFilterStore'
import { useLocaleStore } from 'modules/locale'
import { VehicleTypeName } from 'modules/vehicle-type/model'
import { NationName } from 'modules/nation/model'

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

const openAnotherShip = (delta: number) => {
  const openedShipIndex = useShipStore.getState().openedShipIndex

  const data = QueryService.getClient().getQueryData<Array<Ship>>(['ship'])
  if (!data) {
    ErrorService.log('data is not defined', { tag: 'openAnotherShip' })
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

export const openNextShip = () => {
  openAnotherShip(1)
}

export const openPrevShip = () => {
  openAnotherShip(-1)
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

  const vehicleTypeFilters = useFilterStore.getState().vehicleType
  const vehicleTypeFilterValues = Object.values(vehicleTypeFilters)
  const vehicleTypeFiltered =
    vehicleTypeFilterValues.some((item) => item) && vehicleTypeFilterValues.some((item) => !item)

  if (vehicleTypeFiltered) {
    result = result.filter((item) => vehicleTypeFilters[item.type])
  }

  const levelFilters = useFilterStore.getState().level
  const levelFilterValues = Object.values(levelFilters)
  const levelFiltered =
    levelFilterValues.some((item) => item) && levelFilterValues.some((item) => !item)

  if (levelFiltered) {
    result = result.filter((item) => levelFilters[item.level])
  }

  const nationFilters = useFilterStore.getState().nation
  const nationFilterValues = Object.values(nationFilters)
  const nationFiltered =
    nationFilterValues.some((item) => item) && nationFilterValues.some((item) => !item)

  if (nationFiltered) {
    result = result.filter((item) => nationFilters[item.nation])
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

export const updateVehicleTypesFilter = (vehicleType: VehicleTypeName, value: boolean) => {
  const filter = structuredClone(useFilterStore.getState().vehicleType)
  filter[vehicleType] = value

  useFilterStore.setState({
    vehicleType: filter,
  })
  applyFilters()
}

export const updateLevelFilter = (level: string, value: boolean) => {
  const filter = structuredClone(useFilterStore.getState().level)
  filter[level] = value

  useFilterStore.setState({
    level: filter,
  })
  applyFilters()
}

export const updateNationFilter = (nation: NationName, value: boolean) => {
  const filter = structuredClone(useFilterStore.getState().nation)
  filter[nation] = value

  useFilterStore.setState({
    nation: filter,
  })
  applyFilters()
}

export const resetAllFilters = () => {
  useFilterStore.setState({
    vehicleType: {
      [VehicleTypeName.CRUISER]: false,
      [VehicleTypeName.AIR_CARRIER]: false,
      [VehicleTypeName.BATTLESHIP]: false,
      [VehicleTypeName.DESTROYER]: false,
      [VehicleTypeName.SUBMARINE]: false,
    },
    level: {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
      11: false,
    },
    nation: {
      [NationName.COMMONWEALTH]: false,
      [NationName.USA]: false,
      [NationName.EUROPE]: false,
      [NationName.UK]: false,
      [NationName.FRANCE]: false,
      [NationName.GERMANY]: false,
      [NationName.ITALY]: false,
      [NationName.JAPAN]: false,
      [NationName.NETHERLANDS]: false,
      [NationName.PAN_AMERICA]: false,
      [NationName.PAN_ASIA]: false,
      [NationName.SPAIN]: false,
      [NationName.USSR]: false,
    },
  })
  applyFilters()
}
