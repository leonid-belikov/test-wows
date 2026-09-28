import { useUserStore } from '../store/useUserStore.ts'
import cm from './SelectedShipPreview.module.css'
import { BanIcon } from 'ui-kit/icons'
import { IconService } from 'services'
import { ShipIconSize } from 'modules/ship/model'
import cx from 'clsx'
import { Image } from 'ui-kit'

const SelectedShipPreview = () => {
  const selectedShip = useUserStore((state) => state.selectedShip)

  if (!selectedShip)
    return (
      <div className={cx(cm.preview, cm.empty)}>
        <BanIcon className={cm.icon} />
      </div>
    )

  const url = IconService.getURL(selectedShip.iconPath[ShipIconSize.SMALL])

  return (
    <div className={cm.preview}>
      <Image
        url={url}
        alt={selectedShip.id}
        loaderProps={{ isLogo: false, size: 'small' }}
        isCentered
      />
    </div>
  )
}

export default SelectedShipPreview
