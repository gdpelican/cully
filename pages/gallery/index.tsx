import React from 'react'
import Context, { useGalleryContext } from './context'
import Canvas from './components/canvas'
import Controls from './components/controls'

const Gallery = () => {
  return (
    <Context.Provider value={useGalleryContext('https://cully-api.herokuapp.com')}>
      <header>
        HEADER
      </header>
      <main>
        <Canvas />
        <Controls />
      </main>
      <footer>
        FOOTER
      </footer>
    </Context.Provider>
  )
}

export default Gallery
