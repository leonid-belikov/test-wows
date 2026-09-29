import { useUserStore } from '../store/useUserStore'
import { IconService } from 'services'
import { ShipIconSize } from 'modules/ship/model'
import cm from './SelectedShipInfo.module.css'
import { useLocaleStore } from 'modules/locale'
import { NationIcon } from 'modules/nation'
import { VehicleTypeLabel } from 'modules/vehicle-type'
import { ShipLevel } from 'modules/ship'
import { Image } from 'ui-kit'
import cx from 'clsx'

const SelectedShipInfo = () => {
  const getTranslation = useLocaleStore((state) => state.getTranslation)
  const selectedShip = useUserStore((state) => state.selectedShip)

  if (!selectedShip)
    return (
      <div className={cx(cm.info, cm.empty)}>
        Information about the ship you chose will appear here
      </div>
    )

  const name = getTranslation(selectedShip.nameDictionary)
  const description = getTranslation(selectedShip.descriptionDictionary)

  const src = IconService.getURL(selectedShip.iconPath[ShipIconSize.MEDIUM])

  return (
    <div className={cm.info}>
      <Image className={cm.ship} src={src} alt={name} isCentered />
      <h2>{name}</h2>
      <div className={cm.centerLine}>
        <div className={cm.flagBox}>
          <NationIcon className={cm.flag} value={selectedShip.nation} />
        </div>
        <VehicleTypeLabel value={selectedShip.type} />
        <ShipLevel value={selectedShip.level} />
      </div>
      <div className={cm.description}>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default SelectedShipInfo
