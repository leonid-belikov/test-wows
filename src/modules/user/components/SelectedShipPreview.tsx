import { useUserStore } from '../store/useUserStore'
import cm from './SelectedShipPreview.module.css'
import { IconService } from 'services'
import { ShipIconSize } from 'modules/ship/model'
import cx from 'clsx'
import { Image } from 'ui-kit'
import { useLayoutStore } from 'modules/layout'

const DEFAULT_IMG_PATH =
  'vehicle/contour/PHSC998_e4ac5eab3578438bdec5380500229b7a298ef876c21016f8ba1715da830ff07a.png'

const SelectedShipPreview = () => {
  const selectedShip = useUserStore((state) => state.selectedShip)
  const toggleSidebar = useLayoutStore((state) => state.toggleSidebar)

  if (!selectedShip)
    return (
      <button type="button" className={cx(cm.preview, cm.empty)} onClick={toggleSidebar}>
        <img src={IconService.getURL(DEFAULT_IMG_PATH)} alt="No ship chosen" />
      </button>
    )

  const src = IconService.getURL(selectedShip.iconPath[ShipIconSize.SMALL])

  return (
    <button type="button" className={cm.preview} onClick={toggleSidebar}>
      <Image
        src={src}
        alt={selectedShip.id}
        loaderProps={{ isLogo: false, size: 'small' }}
        isCentered
      />
    </button>
  )
}

export default SelectedShipPreview
