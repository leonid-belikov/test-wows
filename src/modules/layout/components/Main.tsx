import cm from './Main.module.css'
import { useMqStore } from './../store/useMqStore'
import cx from 'clsx'
import type { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Main: FC<Props> = ({ children }) => {
  const isHiddenSidebar = useMqStore((state) => state.isHiddenSidebar)

  return (
    <main
      className={cx(cm.main, {
        [cm.compressed]: !isHiddenSidebar,
      })}
    >
      {children}
    </main>
  )
}

export default Main
