import { type FC, useState } from 'react'
import { type Ship, ShipIconSize } from 'modules/ship/model'
import cm from './ShipCard.module.css'
import { IconService } from 'services'
import { NationIcon } from 'modules/nation'
import { VehicleTypeIcon } from 'modules/vehicle-type'
import { useLocaleStore } from 'modules/locale'
import ShipLevel from './ShipLevel'
import cx from 'clsx'
import { Loader } from 'ui-kit'
import { useShipStore } from '../store/useShipStore'

type Props = {
  ship: Ship
}

const ShipCard: FC<Props> = ({ ship }) => {
  const getTranslation = useLocaleStore((state) => state.getTranslation)
  const name = getTranslation(ship.nameDictionary)

  const openShipDetails = useShipStore((state) => state.openShipDetails)

  const [isLoaded, setIsLoaded] = useState(false)

  const shipIconURL = IconService.getURL(ship.iconPath[ShipIconSize.MEDIUM])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleClick = () => {
    openShipDetails(ship)
  }

  return (
    <button type="button" className={cm.card} onClick={handleClick}>
      <NationIcon value={ship.nation} isLarge className={cm.flag} />
      <img
        loading="lazy"
        src={shipIconURL}
        className={cx(cm.ship, {
          [cm.hidden]: !isLoaded,
        })}
        onLoad={handleLoad}
        alt={name}
      />
      {!isLoaded && <Loader isLogo={false} size="small" className={cm.logo} />}
      <div className={cm.info}>
        <VehicleTypeIcon value={ship.type} />
        <ShipLevel level={ship.level} />
        <div>{name}</div>
      </div>
    </button>
  )
}

export default ShipCard
