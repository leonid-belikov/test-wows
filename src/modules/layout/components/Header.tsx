import cm from './Header.module.css'
import cx from 'clsx'
import type { FC, ReactNode } from 'react'

type Props = {
  className?: string
  children: ReactNode
}

const Header: FC<Props> = ({ className, children }) => {
  return <header className={cx(cm.header, className)}>{children}</header>
}

export default Header
