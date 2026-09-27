import { useNation } from '../hooks/useNation.ts'
import { NationName } from 'modules/nation/model'
import type { FC } from 'react'
import { IconService } from 'services'

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

  return <img loading="lazy" className={className} src={src} alt={value} />
}

export default NationIcon
