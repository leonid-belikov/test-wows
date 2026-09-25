import cm from './Sidebar.module.css'
import cx from 'clsx'
import { useMqStore } from '../store/useMqStore.ts'

const Sidebar = () => {
  const isHiddenSidebar = useMqStore((state) => state.isHiddenSidebar)

  return (
    <aside
      className={cx(cm.sidebar, {
        [cm.hidden]: isHiddenSidebar,
      })}
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolores esse expedita id
      incidunt itaque pariatur quas repellendus tempora voluptatibus!
    </aside>
  )
}

export default Sidebar
