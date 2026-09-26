import cm from './Main.module.css'
import { useMqStore } from './../store/useMqStore'
import cx from 'clsx'
import type { FC, ReactNode } from 'react'
import { useIsDesktop } from 'modules/mq'

type Props = {
  children: ReactNode
}

const Main: FC<Props> = ({ children }) => {
  const isHiddenSidebar = useMqStore((state) => state.isHiddenSidebar)

  const isDesktop = useIsDesktop()

  return (
    <main
      className={cx(cm.main, {
        [cm.compressed]: isDesktop && !isHiddenSidebar,
      })}
    >
      {children}
    </main>
  )
}

export default Main
