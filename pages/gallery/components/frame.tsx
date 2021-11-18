import React, { useContext } from 'react'
import { Rect } from 'react-konva'
import { WIDTH, HEIGHT } from '../constants'

const Frame = (face: Face) => {
  const { xmin, xmax, ymin, ymax } = face

  return <Rect
    cornerRadius={5}
    x={WIDTH * xmin}
    y={HEIGHT * ymin}
    width={(WIDTH * xmax) - (WIDTH * xmin)}
    height={(HEIGHT * ymax) - (HEIGHT * ymin)}
    stroke="darkorchid"
  />
}

export default Frame
