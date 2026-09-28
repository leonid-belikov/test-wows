import cm from './ShipList.module.css'
import { Loader, VirtualGrid } from 'ui-kit'
import { useShip } from '../hooks/useShip.ts'
import cx from 'clsx'
import { shipActions } from 'modules/ship'
import ShipCard from './ShipCard.tsx'
import { useVehicleType } from 'modules/vehicle-type'
import { useNation } from 'modules/nation'
import { useShipStore } from '../store/useShipStore.ts'
import DetailsPanel from './DetailsPanel.tsx'
import Filters from './Filters.tsx'
import { useFilterStore } from '../store/useFilterStore.ts'

const ShipList = () => {
  useVehicleType()
  useNation()
  const { data, isPending, isError } = useShip()
  const filteredData = useFilterStore((state) => state.filteredData)

  const openedShip = useShipStore((state) => state.openedShip)

  if (isPending)
    return (
      <div className={cx(cm.content, cm.empty)}>
        <Loader />
      </div>
    )

  // TODO Make error UI
  if (isError)
    return (
      <div className={cx(cm.content, cm.empty)}>
        <button onClick={shipActions.fetchDataManually}>Try again</button>
      </div>
    )

  const items = filteredData ?? data

  return (
    <div className={cm.content}>
      <Filters />
      <VirtualGrid items={items} children={(item) => <ShipCard ship={item} />} />
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
