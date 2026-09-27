import { useShipStore } from '../store/useShipStore.ts'
import { type FC, useState } from 'react'
import { type Ship, ShipIconSize } from 'modules/ship/model'
import cm from './Details.module.css'
import { CloseIcon } from 'ui-kit/icons'
import { useLocaleStore } from 'modules/locale'
import { IconService } from 'services'
import cx from 'clsx'
import { Loader } from 'ui-kit'

type Props = {
  ship: Ship | null
}

const Details: FC<Props> = ({ ship }) => {
  const closeShipDetails = useShipStore((state) => state.closeShipDetails)
  const getTranslation = useLocaleStore((state) => state.getTranslation)

  const [isLoaded, setIsLoaded] = useState(false)

  const name = ship ? getTranslation(ship.nameDictionary) : ''

  const src = ship ? IconService.getURL(ship.iconPath[ShipIconSize.LARGE]) : null

  const handleLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div className={cm.details}>
      {name && <h1>{name}</h1>}
      {src && (
        <img
          className={cx(cm.ship, {
            [cm.hidden]: !isLoaded,
          })}
          src={src}
          onLoad={handleLoad}
          alt={name ?? ''}
        />
      )}
      {!isLoaded && <Loader className={cm.logo} />}
      <button type="button" onClick={closeShipDetails}>
        <CloseIcon />
      </button>
    </div>
  )
}

export default Details
