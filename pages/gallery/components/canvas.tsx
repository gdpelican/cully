import React, { useContext, useEffect, useRef } from 'react'
import Context from '../context'
import Background from './background'
import { Stage, Layer, Image, Rect } from 'react-konva'
import useImage from 'use-image'

const Canvas = () => {
  const { canvas, currentPhoto } = useContext(Context)
  const [image] = useImage(currentPhoto.compressed)

  return (
    <Stage ref={canvas} width={900} height={600}>
      <Layer>
        <Background src={currentPhoto.compressed} />
      </Layer>
    </Stage>
  )
}

export default Canvas
