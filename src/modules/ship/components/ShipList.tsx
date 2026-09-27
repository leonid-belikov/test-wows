import cm from './ShipList.module.css'
import { VirtualGrid } from 'ui-kit'
import { useShip } from '../hooks/useShip.ts'
import Loader from 'ui-kit/components/Loader.tsx'
import cx from 'clsx'

const ITEMS = Array.from({ length: 1049 }).map((_, i) => ({ id: i + 1 }))

const ShipList = () => {
  const { isPending, isError } = useShip()

  if (isPending)
    return (
      <div className={cx(cm.content, cm.empty)}>
        <Loader />
      </div>
    )

  if (isError) return <div className={cx(cm.content, cm.empty)}>Error</div>

  return (
    <div className={cm.content}>
      <VirtualGrid items={ITEMS} />
    </div>
  )
}

export default ShipList
