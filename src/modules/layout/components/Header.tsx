import cm from './Header.module.css'
import cx from 'clsx'
import type { FC } from 'react'
import { useMqStore } from '../store/useMqStore.ts'

type Props = {
  className?: string
}

const Header: FC<Props> = ({ className }) => {
  const isHiddenSidebar = useMqStore((state) => state.isHiddenSidebar)
  const toggleSidebar = useMqStore((state) => state.toggleSidebar)

  return (
    <header className={cx(cm.header, className)}>
      <button type="button" onClick={toggleSidebar}>
        {isHiddenSidebar ? 'Show' : 'Hide'}
      </button>
    </header>
  )
}

export default Header
