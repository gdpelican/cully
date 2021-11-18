import React, { useState, useEffect, useMemo } from 'react'
import { Rect } from 'react-konva'
import { WIDTH, HEIGHT, PRIMARY_COLOR, SECONDARY_COLOR } from '../constants'

const Frame = ({ xmin, xmax, ymin, ymax, stage }) => {
  const [hover, setHover] = useState(false)

  const strokeWidth: number = useMemo(() => hover ? 4 : 2, [hover])
  const stroke: string = useMemo(() => hover ? SECONDARY_COLOR : PRIMARY_COLOR, [hover])
  useEffect(() => {
    if (!stage.current) return

    stage.current.container().style.cursor = hover ? 'pointer' : 'default'
  }, [hover])

  return <Rect
    cornerRadius={5}
    x={WIDTH * xmin}
    y={HEIGHT * ymin}
    width={(WIDTH * xmax) - (WIDTH * xmin)}
    height={(HEIGHT * ymax) - (HEIGHT * ymin)}
    stroke={stroke}
    strokeWidth={strokeWidth}
    onMouseOver={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
  />
}

export default Frame
