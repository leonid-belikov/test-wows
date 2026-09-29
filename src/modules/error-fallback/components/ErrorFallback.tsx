import cm from './ErrorFallback.module.css'
import { Logo } from 'ui-kit/icons'

const ErrorFallback = () => {
  return (
    <div className={cm.container}>
      <Logo className={cm.logo} />
      <div className={cm.message}>
        <h2>Sorry, something went wrong...</h2>
        <p>We are already working on it!</p>
      </div>
    </div>
  )
}

export default ErrorFallback
