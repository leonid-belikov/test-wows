import cm from './Header.module.css'
import cx from 'clsx'
import type { FC } from 'react'
import { useLayoutStore } from '../store/useLayoutStore'
import { SelectedShipPreview } from 'modules/user'
import { ArrowIcon } from 'ui-kit/icons'

type Props = {
  className?: string
}

const Header: FC<Props> = ({ className }) => {
  const isHiddenSidebar = useLayoutStore((state) => state.isHiddenSidebar)
  const toggleSidebar = useLayoutStore((state) => state.toggleSidebar)

  return (
    <header className={cx(cm.header, className)}>
      <SelectedShipPreview />
      <button className={cm.toggle} type="button" onClick={toggleSidebar}>
        <ArrowIcon
          className={cx(cm.arrow, {
            [cm.left]: !isHiddenSidebar,
            [cm.right]: isHiddenSidebar,
          })}
        />
      </button>
    </header>
  )
}

export default Header
