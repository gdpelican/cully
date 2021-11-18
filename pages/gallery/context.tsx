import { createContext, useState, useMemo, useRef, useEffect } from 'react'
import type { Face, Photo } from './types'
import { compressPhoto, applyBlobToCanvas } from './operations'

export default createContext({})

export const useGalleryContext = (apiUrl) => {
  const [photos, setPhotos] = useState<Array<Image>>([])
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const currentPhoto: Photo = useMemo(() => (photos[currentIndex] || {}), [currentIndex, photos])
  const hasPrev: boolean    = useMemo(() => currentIndex > 0, [currentIndex])
  const hasNext: boolean    = useMemo(() => currentIndex < photos.length - 1, [currentIndex, photos])

  const canvas: Ref = useRef()

  const updatePhoto = (id: string, photo: Photo): void => {
    setPhotos(photos => photos.map(p => (
      p.id === id ? ({ ...photo, ...p }) : p
    )))
  }

  // perform initial fetch of images
  useEffect(() => {
    fetch(`${apiUrl}/images`)
      .then(response => response.json())
      .then(({ data }) => setPhotos(data))
      .catch(console.error)
  }, [apiUrl])

  // fetch faces for image if they haven't been fetched already
  useEffect(() => {
    if (!currentPhoto.url || currentPhoto.faces) return

    fetch(`${apiUrl}/images/${currentPhoto.id}/faces`)
      .then(response => response.json())
      .then(({ data }) => { updatePhoto(currentPhoto.id, { faces: data }) })
      .catch((error) => { updatePhoto(currentPhoto.id, { faces: [] }) })
  }, [currentPhoto.url, apiUrl])

  // compress image if it hasn't been compressed already
  useEffect(() => {
    if (!currentPhoto.url || currentPhoto.compressed) { return }

    compressPhoto(currentPhoto.url, (compressed) => updatePhoto(currentPhoto.id, { compressed }))
  }, [currentPhoto.url, apiUrl])

  // draw current photo onto canvas
  useEffect(() => {
    if (!canvas.current || !currentPhoto.compressed) return

    applyBlobToCanvas(currentPhoto.compressed, () => {}, canvas.current)
  }, [currentPhoto.compressed, canvas.current])

  return {
    canvas,
    currentPhoto,
    hasPrev, prev: () => setCurrentIndex(index => index - 1),
    hasNext, next: () => setCurrentIndex(index => index + 1)
  }
}
