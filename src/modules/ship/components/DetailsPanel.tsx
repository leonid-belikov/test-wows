import { useShipStore } from '../store/useShipStore'
import { type FC } from 'react'
import { type Ship } from 'modules/ship/model'
import cm from './Details.module.css'
import { CloseIcon } from 'ui-kit/icons'
import Details from './Details'
import { useLocaleStore } from 'modules/locale'

type Props = {
  ship: Ship | null
}

const DetailsPanel: FC<Props> = ({ ship }) => {
  const getTranslation = useLocaleStore((state) => state.getTranslation)
  const closeShipDetails = useShipStore((state) => state.closeShipDetails)

  return (
    <div className={cm.panel}>
      {ship && (
        <>
          <h1>{getTranslation(ship.nameDictionary)}</h1>
          <div className={cm.scrollArea}>
            <Details ship={ship} />
          </div>
        </>
      )}
      <button className={cm.close} type="button" onClick={closeShipDetails}>
        <CloseIcon />
      </button>
    </div>
  )
}

export default DetailsPanel
