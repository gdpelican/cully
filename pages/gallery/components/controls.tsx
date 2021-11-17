import React, { useContext } from 'react'
import Context from '../context'

const Controls = () => {
  const { prev, next, hasPrev, hasNext } = useContext(Context)

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button disabled={!hasPrev} onClick={prev}>BACK</button>
      <span>CONTROLS</span>
      <button disabled={!hasNext} onClick={next}>NEXT</button>
    </div>
  )
}

export default Controls
