import React, { useState, useEffect, useMemo } from 'react'
import { Tag, Text, Label, Rect } from 'react-konva'
import { WIDTH, HEIGHT, PRIMARY_COLOR, SECONDARY_COLOR } from '../constants'

const Frame = ({ id, xmin, xmax, ymin, ymax, stage, remove }) => {
  const [hover, setHover] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const active = useMemo(() => hover || showMenu, [hover, showMenu])

  const strokeWidth: number = useMemo(() => active ? 4 : 2, [active])
  const stroke: string = useMemo(() => active ? SECONDARY_COLOR : PRIMARY_COLOR, [active])
  useEffect(() => {
    if (!stage.current) return

    stage.current.container().style.cursor = hover ? 'pointer' : 'default'
  }, [hover])

  return (
    <>
      <Rect
        cornerRadius={showMenu ? [5, 5, 5, 0] : 5}
        x={WIDTH * xmin}
        y={HEIGHT * ymin}
        width={(WIDTH * xmax) - (WIDTH * xmin)}
        height={(HEIGHT * ymax) - (HEIGHT * ymin)}
        stroke={stroke}
        strokeWidth={strokeWidth}
        onClick={() => setShowMenu(true)}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
      <Label
        x={WIDTH * xmin - 2}
        y={HEIGHT * ymax}
        fill="white"
        visible={showMenu}
        onClick={remove}
        padding={10}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Tag
          cornerRadius={[0, 5, 5, 5]}
          x={WIDTH * xmin}
          y={HEIGHT * ymax + 10}
          fill={SECONDARY_COLOR}
        />
        <Text
          fontSize={14}
          fontWeight="bold"
          fill="white"
          text="💥 Delete"
          padding={5}
        />
      </Label>
    </>
  )
}

export default Frame
