import cm from './App.module.css'
import { type FC } from 'react'
import { Header, Main, Sidebar } from 'modules/layout'
import { ShipList } from 'modules/ship'

export const App: FC = () => {
  return (
    <>
      <Header />
      <div className={cm.page}>
        <Sidebar />
        <Main>
          <ShipList />
        </Main>
      </div>
    </>
  )
}
