import React, { useContext, useEffect, useRef } from 'react'
import { Stage, Layer, Image, Rect } from 'react-konva'
import useImage from 'use-image'

import Context from '../lib/context'
import { WIDTH, HEIGHT } from '../lib/constants'
import { GalleryContext } from '../lib/types'

import Background from './background'
import Frame from './frame'
import Loading from './loading'

const Canvas = () => {
  const { currentPhoto, removeFace }: GalleryContext = useContext(Context)
  const stage = useRef(null)

  return (
    <Stage ref={stage} width={WIDTH} height={HEIGHT}>
      <Layer>
        {currentPhoto.compressed ? (
          <>
            <Background src={currentPhoto.compressed} alt={currentPhoto.filename} />
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
