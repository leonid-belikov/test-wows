import { useVehicleType } from '../hooks/useVehicleType'
import { useLocaleStore } from 'modules/locale'
import { VehicleTypeName } from 'modules/vehicle-type/model'
import type { FC } from 'react'

type Props = {
  value: VehicleTypeName
}

const VehicleTypeLabel: FC<Props> = ({ value }) => {
  const getTranslation = useLocaleStore((state) => state.getTranslation)
  const { data, isPending, isError } = useVehicleType()

  if (isPending) return null
  if (isError) return null

  const typeData = data[value]
  const name = getTranslation(typeData.nameDictionary)

  return <div>{name}</div>
}

export default VehicleTypeLabel
