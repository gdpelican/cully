import React, { useContext, useEffect, useRef } from 'react'
import Context from '../context'
import Background from './background'
import Frame from './frame'
import { WIDTH, HEIGHT } from '../constants'
import { Stage, Layer, Image, Rect } from 'react-konva'
import useImage from 'use-image'

const Canvas = () => {
  const { canvas, currentPhoto } = useContext(Context)
  const [image] = useImage(currentPhoto.compressed)

  return (
    <Stage ref={canvas} width={WIDTH} height={HEIGHT}>
      <Layer>
        {currentPhoto.compressed ? (
          <>
            <Background src={currentPhoto.compressed} />
            {currentPhoto.faces ? (
              currentPhoto.faces.map((face) => <Frame key={face.id} {...face} />)
            ) : null}
          </>
        ) : null}
      </Layer>
    </Stage>
  )
}

export default Canvas
