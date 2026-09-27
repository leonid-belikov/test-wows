import type { ShipApiResponse } from './shipApiInterfaces.ts'
import { type ShipData, ShipIconSize } from 'modules/ship/model'

export const shipResponseAdapter = (response: ShipApiResponse): ShipData => {
  return Object.entries(response).reduce((acc, [_key, _value]) => {
    const key = _key as string
    acc[key] = {
      id: _value.name,
      level: _value.level,
      iconPath: {
        [ShipIconSize.SMALL]: _value.icons.small,
        [ShipIconSize.MEDIUM]: _value.icons.medium,
        [ShipIconSize.LARGE]: _value.icons.large,
      },
      type: _value.tags[0],
      nation: _value.nation,
      nameDictionary: _value.localization.mark,
      descriptionDictionary: _value.localization.description,
    }
    return acc
  }, {} as ShipData)
}
