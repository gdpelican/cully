import React from 'react'
import Context, { useGalleryContext } from './context'
import Canvas from './components/canvas'
import Controls from './components/controls'

const Gallery = () => {
  return (
    <Context.Provider value={useGalleryContext('https://cully-api.herokuapp.com')}>
      <main>
        <Canvas />
        <Controls />
      </main>
    </Context.Provider>
  )
}

export default Gallery
