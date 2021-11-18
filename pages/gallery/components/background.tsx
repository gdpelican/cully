import React from 'react'
import { Image } from 'react-konva'
import useImage from 'use-image'
import { WIDTH, HEIGHT } from '../constants'

interface BackgroundProps {
  src: string
}

const Background = ({ src }: BackgroundProps) => {
  const [image] = useImage(src)

  return <Image x={0} y={0} width={WIDTH} height={HEIGHT} image={image} />
}

export default Background
