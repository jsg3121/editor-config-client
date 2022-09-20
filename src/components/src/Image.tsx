import React from 'react'
import isEqual from 'fast-deep-equal'

interface ImageProps {
  children: React.ReactNode
}

const Image: React.FC<ImageProps> = (props) => {
  const { children } = props

  return (
    <>
      <picture>
        <figure>{children}</figure>
      </picture>
    </>
  )
}

export default React.memo(Image, isEqual)
