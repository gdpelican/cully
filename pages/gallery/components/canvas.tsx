import React, { useContext, useEffect, useRef } from 'react'
import Context from '../context'
import Background from './background'
import Frame from './frame'
import Loading from './loading'
import { WIDTH, HEIGHT } from '../constants'
import { Stage, Layer, Image, Rect } from 'react-konva'
import { GalleryContext } from '../types'
import useImage from 'use-image'

const Canvas = () => {
  const { currentPhoto, removeFace }: GalleryContext = useContext(Context)
  const stage = useRef(null)

  return (
    <Stage ref={stage} width={WIDTH} height={HEIGHT}>
      <Layer>
        {currentPhoto.compressed ? (
          <>
            <Background src={currentPhoto.compressed} />
            {currentPhoto.faces ? (
              currentPhoto.faces.map((face) => (
                <Frame
                  key={face.id}
                  stage={stage}
                  remove={() => removeFace(face.id)}
                  {...face}
                />
              ))
            ) : null}
          </>
        ) : (
          <Loading />
        )}
      </Layer>
    </Stage>
  )
}

export default Canvas
