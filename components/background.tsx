import React from 'react'
import { Image } from 'react-konva'
import useImage from 'use-image'

import { WIDTH, HEIGHT } from '../lib/constants'

interface BackgroundProps {
  src: string,
  alt?: string
}

const Background = ({ src, alt }: BackgroundProps) => {
  const [image] = useImage(src)

  return <Image x={0} y={0} width={WIDTH} height={HEIGHT} image={image} alt={alt} />
}

export default Background
