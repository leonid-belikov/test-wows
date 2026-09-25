import useMediaQuery from './useMediaQuery'
import { DESKTOP_MEDIA_QUERY } from '../mqConstants'

const useIsDesktop = () => {
  return useMediaQuery(DESKTOP_MEDIA_QUERY)
}

export default useIsDesktop
