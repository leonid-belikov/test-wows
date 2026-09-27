import cm from './ShipList.module.css'
import { Loader, VirtualGrid } from 'ui-kit'
import { useShip } from '../hooks/useShip.ts'
import cx from 'clsx'
import { shipActions } from 'modules/ship'

const ITEMS = Array.from({ length: 1049 }).map((_, i) => ({ id: i + 1 }))

const ShipList = () => {
  const { isPending, isError } = useShip()

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
      <VirtualGrid items={ITEMS} />
    </div>
  )
}

export default ShipList
