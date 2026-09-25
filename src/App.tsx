import cm from './App.module.css'
import { type FC } from 'react'
import { Header, useMqStore } from 'modules/layout'
import cx from 'clsx'

export const App: FC = () => {
  const isHiddenSidebar = useMqStore((state) => state.isHiddenSidebar)

  return (
    <>
      <Header />
      <div className={cm.page}>
        <aside
          className={cx(cm.sidebar, {
            [cm.hidden]: isHiddenSidebar,
          })}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolores esse expedita
          id incidunt itaque pariatur quas repellendus tempora voluptatibus!
        </aside>
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
