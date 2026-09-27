import { Locale } from 'modules/locale/model'

export const enum NationName {
  NETHERLANDS = 'netherlands',
  USA = 'usa',
  COMMONWEALTH = 'commonwealth',
  EUROPE = 'europe',
  GERMANY = 'germany',
  USSR = 'ussr',
  ITALY = 'italy',
  PAN_AMERICA = 'pan_america',
  JAPAN = 'japan',
  UK = 'uk',
  PAN_ASIA = 'pan_asia',
  FRANCE = 'france',
  SPAIN = 'spain',
}

export interface Nation {
  name: NationName
  iconPath: {
    small: string
    large: string
  }
  nameDictionary: Record<Locale, string>
}
