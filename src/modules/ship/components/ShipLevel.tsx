import { type FC } from 'react'

type Props = {
  value: number
}

const MAP: Record<string, string> = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',
  10: 'X',
  11: '★',
}

const ShipLevel: FC<Props> = ({ value }) => {
  const displayedLevel = MAP[value.toString()]

  return <div>{displayedLevel}</div>
}

export default ShipLevel
