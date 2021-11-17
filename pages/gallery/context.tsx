import { createContext, useState, useMemo, useEffect } from 'react'
import type { Face, Image } from './types'

export default createContext({})

export const useGalleryContext = (apiUrl) => {
  const [images, setImages] = useState<Array<Image>>([])
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const currentImage: (Image | undefined) = useMemo(() => images[currentIndex], [currentIndex, images])
  const hasPrev: boolean                  = useMemo(() => currentIndex > 0, [currentIndex])
  const hasNext: boolean                  = useMemo(() => currentIndex < images.length - 1, [currentIndex, images])

  useEffect(() => {
    fetch(`${apiUrl}/images`)
      .then(response => response.json())
      .then(({ data }) => setImages(data))
      .catch(console.error)
  }, [apiUrl])

  const setFaces = (id: string, faces: Array<Face>) => {
    setImages(images => images.map(image => (
      image.id === id ? ({ faces, ...image }) : image
    )))
  }

  useEffect(() => {
    if (!currentImage || currentImage.faces) { return }

    fetch(`${apiUrl}/images/${currentImage.id}/faces`)
      .then(response => response.json())
      .then(({ data }) => { setFaces(currentImage.id, data) })
      .catch((error) => { setFaces(currentImage.id, []) })
  }, [currentImage, apiUrl])

  return {
    images,
    currentImage,
    hasPrev, prev: () => setCurrentIndex(index => index - 1),
    hasNext, next: () => setCurrentIndex(index => index + 1)
  }
}
