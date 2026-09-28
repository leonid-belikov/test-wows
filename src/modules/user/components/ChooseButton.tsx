import { type FC } from 'react'
import { useUserStore } from 'modules/user'
import type { Ship } from 'modules/ship/model'

type Props = {
  ship: Ship
}

const ChooseButton: FC<Props> = ({ ship }) => {
  const selectedShip = useUserStore((state) => state.selectedShip)
  const setSelectedShip = useUserStore((state) => state.setSelectedShip)

  const chosen = ship.id === selectedShip?.id

  const handleClick = () => {
    setSelectedShip(ship)
  }

  return (
    <button type="button" disabled={chosen} onClick={handleClick}>
      {chosen ? 'Chosen' : 'Choose'}
    </button>
  )
}

export default ChooseButton
