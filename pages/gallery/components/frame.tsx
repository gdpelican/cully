import React, { useContext } from 'react'
import { Rect } from 'react-konva'
import { WIDTH, HEIGHT, PRIMARY_COLOR } from '../constants'

const Frame = (face: Face) => {
  const { xmin, xmax, ymin, ymax } = face

  return <Rect
    cornerRadius={5}
    x={WIDTH * xmin}
    y={HEIGHT * ymin}
    width={(WIDTH * xmax) - (WIDTH * xmin)}
    height={(HEIGHT * ymax) - (HEIGHT * ymin)}
    stroke={PRIMARY_COLOR}
  />
}

export default Frame
