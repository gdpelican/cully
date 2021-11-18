import React, { useRef, useEffect } from 'react'
import { Rect } from 'react-konva'
import Konva from 'konva'

import { WIDTH, HEIGHT, LOADING, PRIMARY_COLOR } from '../lib/constants'

const Loading = () => {
  const loader = useRef()

  const animation = new Konva.Animation((frame) => {
    if (!loader.current) return

    loader.current.rotate(frame.timeDiff / 8)
  })
  useEffect(() => { animation.start() }, [])

  return (
    <Rect
      fill={PRIMARY_COLOR}
      x={(WIDTH / 2) - (LOADING / 2)}
      y={(HEIGHT / 2) - (LOADING / 2)}
      width={LOADING}
      height={LOADING}
      ref={loader}
      offset={{ x: LOADING / 2, y: LOADING / 2}}
      shadowBlur={10}
      shadowOpacity={0.5}
    />
  )
}

export default Loading
