import { useVehicleType } from '../hooks/useVehicleType'
import { VehicleTypeName } from 'modules/vehicle-type/model'
import type { FC } from 'react'
import { IconService } from 'services'
import { Image } from 'ui-kit'
import cm from './VehicleTypeIcon.module.css'
import cx from 'clsx'

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

  return <Image src={src} alt={value} className={cx(cm.icon, className)} showLoader={false} />
}

export default VehicleTypeIcon
