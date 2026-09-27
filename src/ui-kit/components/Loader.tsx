import { Logo } from 'ui-kit/icons'
import cm from './Loader.module.css'
import type { FC } from 'react'
import cx from 'clsx'

type Props = {
  isLogo?: boolean
  size?: 'normal' | 'small'
  className?: string
}

const Loader: FC<Props> = ({ isLogo = true, size = 'normal', className }) => {
  return (
    <div
      className={cx(cm.loader, className, {
        [cm.mini]: size === 'small',
      })}
    >
      <div className={cm.spinner} />
      {isLogo && <Logo className={cm.logo} />}
    </div>
  )
}

export default Loader
