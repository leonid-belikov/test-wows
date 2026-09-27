import { NationName } from 'modules/nation/model'
import { Locale } from 'modules/locale/model'

export interface NationApiInterface {
  name: NationName
  icons: {
    large: string
    default: string
    local_large: string
    local_tiny: string
    small: string
    local_small: string
    tiny: string
  }
  color: number
  tags: Array<string>
  localization: {
    mark: Record<Locale, string>
  }
  id: number
}

export type NationApiResponse = Array<NationApiInterface>
