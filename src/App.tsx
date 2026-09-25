import cm from './App.module.css'
import { type FC, useState } from 'react'
import { Header } from 'modules/layout'
import cx from 'clsx'

export const App: FC = () => {
  const [show, setShow] = useState(true)

  return (
    <>
      <Header className={cm.header}>
        <button
          type="button"
          onClick={() => {
            setShow((prev) => !prev)
          }}
        >
          Show
        </button>
      </Header>
      <div className={cm.page}>
        <aside
          className={cx(cm.sidebar, {
            [cm.hidden]: !show,
          })}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolores esse expedita
          id incidunt itaque pariatur quas repellendus tempora voluptatibus!
        </aside>
        <main
          className={cx(cm.main, {
            [cm.compressed]: show,
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
