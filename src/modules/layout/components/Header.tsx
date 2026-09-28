import cm from './Header.module.css'
import cx from 'clsx'
import type { FC } from 'react'
import { useLayoutStore } from '../store/useLayoutStore'
import { SelectedShipPreview } from 'modules/user'
import { ArrowIcon, WorldIcon } from 'ui-kit/icons'
import { useIsDesktop } from 'modules/mq'
import { LocaleDropdown } from 'modules/locale'

type Props = {
  className?: string
}

const Header: FC<Props> = ({ className }) => {
  const isDesktop = useIsDesktop()
  const isHiddenSidebar = useLayoutStore((state) => state.isHiddenSidebar)
  const toggleSidebar = useLayoutStore((state) => state.toggleSidebar)

  const logoSrc = isDesktop ? '/static/logo-long.webp' : '/static/logo.webp'

  return (
    <header className={cx(cm.header, className)}>
      <div className={cm.leftBox}>
        <SelectedShipPreview />
        <button className={cm.toggle} type="button" onClick={toggleSidebar}>
          <ArrowIcon
            className={cx(cm.arrow, {
              [cm.left]: !isHiddenSidebar,
              [cm.right]: isHiddenSidebar,
            })}
          />
        </button>
        <div className={cm.locale}>
          <WorldIcon className={cm.worldIcon} />
          <LocaleDropdown />
        </div>
      </div>
      <img className={cm.logo} src={logoSrc} alt="logo" />
    </header>
  )
}

export default Header
