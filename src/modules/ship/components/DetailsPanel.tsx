import { useShipStore } from '../store/useShipStore'
import { type FC } from 'react'
import { type Ship } from 'modules/ship/model'
import cm from './Details.module.css'
import { CloseIcon } from 'ui-kit/icons'
import Details from './Details'

type Props = {
  ship: Ship | null
}

const DetailsPanel: FC<Props> = ({ ship }) => {
  const closeShipDetails = useShipStore((state) => state.closeShipDetails)

  return (
    <div className={cm.panel}>
      {ship && <Details ship={ship} />}
      <button className={cm.close} type="button" onClick={closeShipDetails}>
        <CloseIcon />
      </button>
    </div>
  )
}

export default DetailsPanel
