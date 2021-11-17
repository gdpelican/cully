import React, { useContext } from 'react'
import Context from '../context'

const Canvas = () => {
  const { currentImage } = useContext(Context)

  return currentImage ? (
    <div>{JSON.stringify(currentImage)}</div>
  ) : (
    <div>Loading...</div>
  )
}

export default Canvas
