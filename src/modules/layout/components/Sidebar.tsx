import cm from './Sidebar.module.css'
import cx from 'clsx'
import { useLayoutStore } from '../store/useLayoutStore'
import { useIsDesktop } from 'modules/mq'
import { SelectedShipInfo } from 'modules/user'

const Sidebar = () => {
  const isHiddenSidebar = useLayoutStore((state) => state.isHiddenSidebar)

  const isDesktop = useIsDesktop()

  return (
    <aside
      className={cx(cm.sidebar, {
        [cm.hidden]: isHiddenSidebar,
        [cm.isDesktop]: isDesktop,
      })}
    >
      <div className={cm.content}>
        <SelectedShipInfo />
      </div>
    </aside>
  )
}

export default Sidebar
