import { useLocaleStore } from 'modules/locale'
import { useNation } from '../hooks/useNation'
import { NationName } from 'modules/nation/model'
import type { FC } from 'react'

type Props = {
  value: NationName
  className?: string
}

const NationLabel: FC<Props> = ({ value, className }) => {
  const getTranslation = useLocaleStore((state) => state.getTranslation)
  const { data, isPending, isError } = useNation()

  if (isPending) return null
  if (isError) return null

  const nationData = data.find((item) => item.name === value)
  if (!nationData) return null

  const name = getTranslation(nationData.nameDictionary)

  return <div className={className}>{name}</div>
}

export default NationLabel
