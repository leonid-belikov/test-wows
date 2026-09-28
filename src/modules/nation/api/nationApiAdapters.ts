import type { NationApiInterface, NationApiResponse } from './nationApiInterfaces'
import type { Nation } from 'modules/nation/model'

const mapNation = (response: NationApiInterface): Nation => ({
  name: response.name,
  iconPath: {
    small: response.icons.tiny,
    large: response.icons.large,
  },
  nameDictionary: response.localization.mark,
})

export const nationResponseAdapter = (response: NationApiResponse): Array<Nation> =>
  response.map(mapNation)
