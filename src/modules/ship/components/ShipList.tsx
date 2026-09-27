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

  const keys = Object.keys(data)

  return (
    <div className={cm.content}>
      <VirtualGrid keys={keys} children={(key) => <ShipCard ship={data[key]} />} />
    </div>
  )
}

export default ShipList
