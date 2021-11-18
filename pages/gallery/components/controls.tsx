import React, { useContext } from 'react'
import Context from '../context'
import { PRIMARY_COLOR } from '../constants'

const Controls = () => {
  const { currentPhoto, prev, next, hasPrev, hasNext } = useContext(Context)

  return (
    <div className="cully__controls">
      <button style={{color: PRIMARY_COLOR}} disabled={!hasPrev} onClick={prev}>← BACK</button>
      <span>{currentPhoto.filename}</span>
      <button style={{color: PRIMARY_COLOR}} disabled={!hasNext} onClick={next}>NEXT →</button>
    </div>
  )
}

export default Controls
