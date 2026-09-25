import cm from './Main.module.css'
import { useMqStore } from '../index.ts'
import cx from 'clsx'

const Main = () => {
  const isHiddenSidebar = useMqStore((state) => state.isHiddenSidebar)
  return (
    <main
      className={cx(cm.main, {
        [cm.compressed]: !isHiddenSidebar,
      })}
    >
      <div className={cm.content}>
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className={cm.card}>
            Card {i + 1}
          </div>
        ))}
      </div>
    </main>
  )
}

export default Main
