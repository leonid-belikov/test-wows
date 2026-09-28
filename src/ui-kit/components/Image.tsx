import { type FC, useState } from 'react'
import cx from 'clsx'
import cm from './Image.module.css'
import { Loader } from 'ui-kit'

type Props = {
  url: string
  alt: string
  loaderProps?: {
    isLogo?: boolean
    size?: 'normal' | 'small'
  }
  className?: string
  isCentered?: boolean
}

const Image: FC<Props> = ({ url, alt, loaderProps = {}, className, isCentered }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div className={cx(cm.image, className)}>
      <img
        loading="lazy"
        src={url}
        className={cx({
          [cm.hidden]: !isLoaded,
        })}
        onLoad={handleLoad}
        alt={alt}
      />
      {!isLoaded && (
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
