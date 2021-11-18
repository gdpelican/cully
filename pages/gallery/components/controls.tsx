import React, { useContext } from 'react'
import Context from '../context'

const Controls = () => {
  const { currentPhoto, prev, next, hasPrev, hasNext } = useContext(Context)

  return (
    <div className="cully__controls">
      <button disabled={!hasPrev} onClick={prev}>BACK</button>
      <span>{currentPhoto.filename}</span>
      <button disabled={!hasNext} onClick={next}>NEXT</button>
    </div>
  )
}

export default Controls
