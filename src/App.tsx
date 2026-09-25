// import cm from './App.module.css'
import type { FC } from 'react'
import { IfMediaQuery } from 'modules/mq'

export const App: FC = () => {
  return (
    <div>
      <IfMediaQuery contentIfMobile={<div>Mobile</div>} contentIfDesktop={<div>Desktop</div>} />
    </div>
  )
}
