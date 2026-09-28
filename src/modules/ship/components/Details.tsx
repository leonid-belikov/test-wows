import { type FC, useState } from 'react'
import cm from './Details.module.css'
import { type Ship, ShipIconSize } from 'modules/ship/model'
import { useLocaleStore } from 'modules/locale'
import { IconService } from 'services'
import cx from 'clsx'
import { Loader } from 'ui-kit'
import { VehicleTypeLabel } from 'modules/vehicle-type'
import ShipLevel from './ShipLevel'
import { NationIcon } from 'modules/nation'
import { ArrowIcon } from 'ui-kit/icons'
import { useShipStore } from '../store/useShipStore'
import { shipActions } from 'modules/ship'

type Props = {
  ship: Ship
}

const Details: FC<Props> = ({ ship }) => {
  const getTranslation = useLocaleStore((state) => state.getTranslation)
  const hasPrev = useShipStore((state) => state.hasPrev)
  const hasNext = useShipStore((state) => state.hasNext)

  const [isLoaded, setIsLoaded] = useState(false)

  const name = getTranslation(ship.nameDictionary)
  const description = getTranslation(ship.descriptionDictionary)

  const src = IconService.getURL(ship.iconPath[ShipIconSize.LARGE])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleClickLeft = () => {
    shipActions.openPrevShip()
  }

  const handleClickRight = () => {
    shipActions.openNextShip()
  }

  return (
    <div className={cm.details}>
      <h1>{name}</h1>
      <div className={cm.centralLine}>
        <div className={cm.ship}>
          <img
            className={cx({
              [cm.hidden]: !isLoaded,
            })}
            src={src}
            onLoad={handleLoad}
            alt={name}
          />
          {!isLoaded && <Loader className={cm.loader} />}
        </div>
        <div className={cm.buttons}>
          <button
            className={cx(cm.arrow, {
              [cm.hidden]: !hasPrev,
            })}
            type="button"
            onClick={handleClickLeft}
          >
            <ArrowIcon className={cm.left} />
          </button>
          <button
            className={cx(cm.arrow, {
              [cm.hidden]: !hasNext,
            })}
            type="button"
            onClick={handleClickRight}
          >
            <ArrowIcon className={cm.right} />
          </button>
        </div>
      </div>
      <div className={cm.bottomLine}>
        <div className={cm.flagBox}>
          <NationIcon className={cm.flag} value={ship.nation} />
        </div>
        <VehicleTypeLabel value={ship.type} />
        <ShipLevel value={ship.level} />
      </div>
      <div className={cm.description}>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Details
