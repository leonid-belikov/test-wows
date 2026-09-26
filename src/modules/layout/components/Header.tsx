import cm from './Header.module.css'
import cx from 'clsx'
import type { FC } from 'react'
import { useLayoutStore } from '../store/useLayoutStore.ts'

type Props = {
  className?: string
}

const Header: FC<Props> = ({ className }) => {
  const isHiddenSidebar = useLayoutStore((state) => state.isHiddenSidebar)
  const toggleSidebar = useLayoutStore((state) => state.toggleSidebar)

  return (
    <header className={cx(cm.header, className)}>
      <button type="button" onClick={toggleSidebar}>
        {isHiddenSidebar ? 'Show' : 'Hide'}
      </button>
    </header>
  )
}

export default Header
