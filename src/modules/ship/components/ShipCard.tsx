import { type FC } from 'react'
import { type Ship, ShipIconSize } from 'modules/ship/model'
import cm from './ShipCard.module.css'
import { IconService } from 'services'
import { NationIcon } from 'modules/nation'
import { VehicleTypeIcon } from 'modules/vehicle-type'
import { useLocaleStore } from 'modules/locale'
import ShipLevel from './ShipLevel'
import { shipActions } from 'modules/ship'
import { Image } from 'ui-kit'
import cx from 'clsx'

type Props = {
  ship: Ship
  isSelected: boolean
}

const ShipCard: FC<Props> = ({ ship, isSelected }) => {
  const getTranslation = useLocaleStore((state) => state.getTranslation)
  const name = getTranslation(ship.nameDictionary)

  const shipIconURL = IconService.getURL(ship.iconPath[ShipIconSize.MEDIUM])

  const handleClick = () => {
    shipActions.openShipDetails(ship)
  }

  return (
    <button
      type="button"
      className={cx(cm.card, {
        [cm.selected]: isSelected,
      })}
      onClick={handleClick}
    >
      <NationIcon value={ship.nation} isLarge className={cm.flag} />
      <Image
        className={cm.ship}
        url={shipIconURL}
        alt={name}
        loaderProps={{ isLogo: false, size: 'small' }}
      />
      <div className={cm.info}>
        <VehicleTypeIcon value={ship.type} />
        <ShipLevel value={ship.level} />
        <div>{name}</div>
      </div>
    </button>
  )
}

export default ShipCard
