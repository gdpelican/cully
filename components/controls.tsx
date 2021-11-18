import React, { useContext } from 'react'

import Context from '../lib/context'
import { PRIMARY_COLOR } from '../lib/constants'
import { GalleryContext } from '../lib/types'

const Controls = () => {
  const { currentPhoto, prev, next, hasPrev, hasNext }: GalleryContext = useContext(Context)

  return (
    <div className="cully__controls">
      <button
        tabIndex={1}
        style={{color: PRIMARY_COLOR}}
        disabled={!hasPrev}
        onClick={prev}
      >← BACK</button>
      <span>{currentPhoto.filename}</span>
      <button
        tabIndex={2}
        style={{color: PRIMARY_COLOR}}
        disabled={!hasNext}
        onClick={next}
      >NEXT →</button>
    </div>
  )
}

export default Controls
