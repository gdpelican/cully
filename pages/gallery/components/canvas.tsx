import React, { useContext, useEffect, useRef } from 'react'
import Context from '../context'

const Canvas = () => {
  const { canvas, currentPhoto } = useContext(Context)

  return currentPhoto.url ? (
    <canvas ref={canvas} width="1200" height="800" />
  ) : (
    <div>Loading...</div>
  )
}

export default Canvas
