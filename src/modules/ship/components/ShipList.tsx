import cm from './ShipList.module.css'
import { Loader, VirtualGrid } from 'ui-kit'
import { useShip } from '../hooks/useShip'
import cx from 'clsx'
import { shipActions } from 'modules/ship'
import ShipCard from './ShipCard'
import { useVehicleType } from 'modules/vehicle-type'
import { useNation } from 'modules/nation'
import { useShipStore } from '../store/useShipStore'
import DetailsPanel from './DetailsPanel'
import Filters from './Filters'
import { useFilterStore } from '../store/useFilterStore'
import { useUserStore } from 'modules/user'

const ShipList = () => {
  const { isPending: isVehicleTypePending, isError: isVehicleTypeError } = useVehicleType()
  const { isPending: isNationPending, isError: isNationError } = useNation()
  const { data, isPending: isShipPending, isError: isShipError } = useShip()
  const isError = isVehicleTypeError || isNationError || isShipError
  const isPending = isVehicleTypePending || isNationPending || isShipPending

  const filteredData = useFilterStore((state) => state.filteredData)

  const openedShip = useShipStore((state) => state.openedShip)
  const selectedShip = useUserStore((state) => state.selectedShip)

  if (isPending)
    return (
      <div className={cx(cm.content, cm.empty)}>
        <Loader />
      </div>
    )

  if (isError)
    return (
      <div className={cx(cm.content, cm.empty)}>
        Something went wrong
        <button type="button" className={cm.refresh} onClick={shipActions.fetchDataManually}>
          Try again
        </button>
      </div>
    )

  const items = filteredData ?? data

  return (
    <div className={cm.content}>
      <Filters />
      <VirtualGrid
        items={items}
        children={(item) => <ShipCard ship={item} isSelected={item.id === selectedShip?.id} />}
        emptyText="No ships found"
      />
      <div
        className={cx(cm.details, {
          [cm.opened]: !!openedShip,
        })}
      >
        <DetailsPanel ship={openedShip} key={openedShip?.id} />
      </div>
    </div>
  )
}

export default ShipList
