import React from 'react'

import Canvas from '../components/canvas'
import Controls from '../components/controls'

import Context, { useGalleryContext } from '../lib/context'
import { PRIMARY_COLOR } from '../lib/constants'

const Gallery = () => {
  return (
    <Context.Provider value={useGalleryContext(process.env.NEXT_PUBLIC_API_URL!)}>
      <main style={{ borderColor: PRIMARY_COLOR }} className="cully__main">
        <Canvas />
        <Controls />
      </main>
    </Context.Provider>
  )
}

export default Gallery
