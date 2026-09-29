import { type FC, useState } from 'react'
import cx from 'clsx'
import cm from './Image.module.css'
import { Loader } from 'ui-kit'

type Props = {
  src: string
  alt: string
  loaderProps?: {
    isLogo?: boolean
    size?: 'normal' | 'small'
  }
  className?: string
  isCentered?: boolean
  showLoader?: boolean
}

const Image: FC<Props> = ({
  src,
  alt,
  loaderProps = {},
  className,
  isCentered,
  showLoader = true,
}) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div className={cx(cm.image, className)}>
      <img
        loading="lazy"
        src={src}
        className={cx({
          [cm.hidden]: !isLoaded,
        })}
        onLoad={handleLoad}
        alt={alt}
      />
      {showLoader && !isLoaded && (
        <Loader
          {...loaderProps}
          className={cx(cm.loader, {
            [cm.centered]: isCentered,
            [cm.centeredMini]: isCentered && loaderProps.size === 'small',
          })}
        />
      )}
    </div>
  )
}

export default Image
