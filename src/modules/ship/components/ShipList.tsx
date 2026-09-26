import cm from './ShipList.module.css'
import { VirtualGrid } from 'ui-kit'

const ITEMS = Array.from({ length: 1049 }).map((_, i) => i + 1)

const ShipList = () => {
  return (
    <div className={cm.content}>
      <VirtualGrid items={ITEMS} />
    </div>
  )
}

export default ShipList
