import { useNation } from '../hooks/useNation'
import { NationName } from 'modules/nation/model'
import type { FC } from 'react'
import { IconService } from 'services'
import { Image } from 'ui-kit'

type Props = {
  value: NationName
  isLarge?: boolean
  className?: string
}

const NationIcon: FC<Props> = ({ value, isLarge, className }) => {
  const { data, isPending, isError } = useNation()

  if (isPending) return null
  if (isError) return null

  const nationData = data.find((item) => item.name === value)
  if (!nationData) return null

  const path = isLarge ? nationData.iconPath.large : nationData.iconPath.small
  const src = IconService.getURL(path)

  return <Image src={src} alt={value} className={className} showLoader={false} />
}

export default NationIcon
