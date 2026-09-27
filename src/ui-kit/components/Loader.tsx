import { Logo } from 'ui-kit/icons'
import cm from './Loader.module.css'

const Loader = () => {
  return (
    <div className={cm.loader}>
      <div className={cm.spinner} />
      <Logo className={cm.logo} />
    </div>
  )
}

export default Loader
