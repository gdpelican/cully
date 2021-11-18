import React from 'react'
import { Image } from 'react-konva'
import useImage from 'use-image'

const Background = ({ src }) => {
  const [image] = useImage(src)

  return <Image x={0} y={0} width={900} height={600} image={image} />
}

export default Background
