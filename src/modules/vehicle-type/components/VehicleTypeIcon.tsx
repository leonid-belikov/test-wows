import { useVehicleType } from '../hooks/useVehicleType'
import { VehicleTypeName } from 'modules/vehicle-type/model'
import type { FC } from 'react'
import { IconService } from 'services'

type Props = {
  value: VehicleTypeName
  className?: string
}

const VehicleTypeIcon: FC<Props> = ({ value, className }) => {
  const { data, isPending, isError } = useVehicleType()

  if (isPending) return null
  if (isError) return null

  const typeData = data[value]
  const src = IconService.getURL(typeData.iconPath)

  return <img className={className} src={src} alt={value} />
}

export default VehicleTypeIcon
