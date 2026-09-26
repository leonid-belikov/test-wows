import cm from './Sidebar.module.css'
import cx from 'clsx'
import { useLayoutStore } from '../store/useLayoutStore'
import { useIsDesktop } from 'modules/mq'

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
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolores esse expedita id
      incidunt itaque pariatur quas repellendus tempora voluptatibus!
    </aside>
  )
}

export default Sidebar
