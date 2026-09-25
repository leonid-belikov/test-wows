import cm from './Header.module.css'
import cx from 'clsx'
import type { FC } from 'react'

type Props = {
  className?: string
}

const Header: FC<Props> = ({ className }) => {
  return <header className={cx(cm.header, className)}></header>
}

export default Header
