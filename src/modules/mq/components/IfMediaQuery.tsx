import { type FC, type ReactNode } from 'react'
import { useIsDesktop } from 'modules/mq'

type Props = {
  contentIfMobile: ReactNode
  contentIfDesktop: ReactNode
}

const IfMediaQuery: FC<Props> = ({ contentIfMobile, contentIfDesktop }) => {
  const isDesktop = useIsDesktop()

  return isDesktop ? contentIfDesktop : contentIfMobile
}

export default IfMediaQuery
