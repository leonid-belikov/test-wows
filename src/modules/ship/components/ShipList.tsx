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

const ShipList = () => {
  useVehicleType()
  useNation()
  const { data, isPending, isError } = useShip()

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

  return (
    <div className={cm.content}>
      <div className={cm.filters}>
        <h2>Filters</h2>
      </div>
      <VirtualGrid items={data} children={(item) => <ShipCard ship={item} />} />
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
