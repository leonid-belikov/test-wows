import cm from './App.module.css'
import { type FC } from 'react'
import { Header, Sidebar, useMqStore } from 'modules/layout'
import cx from 'clsx'

export const App: FC = () => {
  const isHiddenSidebar = useMqStore((state) => state.isHiddenSidebar)

  return (
    <>
      <Header />
      <div className={cm.page}>
        <Sidebar />
        <main
          className={cx(cm.main, {
            [cm.compressed]: !isHiddenSidebar,
          })}
        >
          <div className={cm.content}>
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i} className={cm.card}>
                Card {i + 1}
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  )
}
