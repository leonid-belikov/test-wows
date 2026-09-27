import cm from './ShipList.module.css'
import { Loader, VirtualGrid } from 'ui-kit'
import { useShip } from '../hooks/useShip.ts'
import cx from 'clsx'
import { shipActions } from 'modules/ship'
import ShipCard from 'ui-kit/components/ShipCard.tsx'
import { useVehicleType } from 'modules/vehicle-type'
import { useNation } from 'modules/nation'

const ShipList = () => {
  useVehicleType()
  useNation()
  const { data, isPending, isError } = useShip()

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
      <VirtualGrid items={data} children={(item) => <ShipCard ship={item} />} />
    </div>
  )
}

export default ShipList
