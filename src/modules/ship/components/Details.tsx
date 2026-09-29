import { type FC } from 'react'
import cm from './Details.module.css'
import { type Ship, ShipIconSize } from 'modules/ship/model'
import { useLocaleStore } from 'modules/locale'
import { IconService } from 'services'
import cx from 'clsx'
import { VehicleTypeLabel } from 'modules/vehicle-type'
import ShipLevel from './ShipLevel'
import { NationIcon } from 'modules/nation'
import { ArrowIcon } from 'ui-kit/icons'
import { useShipStore } from '../store/useShipStore'
import { shipActions } from 'modules/ship'
import { ChooseButton } from 'modules/user'
import { Image } from 'ui-kit'

type Props = {
  ship: Ship
}

const Details: FC<Props> = ({ ship }) => {
  const getTranslation = useLocaleStore((state) => state.getTranslation)
  const hasPrev = useShipStore((state) => state.hasPrev)
  const hasNext = useShipStore((state) => state.hasNext)

  const name = getTranslation(ship.nameDictionary)
  const description = getTranslation(ship.descriptionDictionary)

  const src = IconService.getURL(ship.iconPath[ShipIconSize.LARGE])

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
        <Image className={cm.ship} src={src} alt={name} isCentered />
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
          <div className={cx(cm.chooseBtn)}>
            <ChooseButton ship={ship} />
          </div>
        </div>
      </div>
      <div className={cm.bottomLine}>
        <div className={cm.flagBox}>
          <NationIcon className={cm.flag} value={ship.nation} />
        </div>
        <VehicleTypeLabel value={ship.type} />
        <ShipLevel value={ship.level} />
        <div className={cx(cm.chooseBtn)}>
          <ChooseButton ship={ship} />
        </div>
      </div>
      <div className={cm.description}>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Details
