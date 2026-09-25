import cm from './App.module.css'
import type { FC } from 'react'
import { Header } from 'modules/layout'

export const App: FC = () => {
  return (
    <div>
      <Header className={cm.header} />
    </div>
  )
}
