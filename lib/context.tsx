import { createContext, useState, useMemo, useEffect } from 'react'

import { Face, Photo, PartialPhoto, ApiResponse } from './types'
import { compressPhoto } from './operations'

export default createContext({
  currentPhoto: {},
  removeFace: (id: string) => {},
  hasPrev: false,
  hasNext: false,
  prev: () => {},
  next: () => {}
})

export const useCullyContext = (apiUrl: string) => {
  const [photos, setPhotos] = useState<Array<Photo>>([])
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const currentPhoto: Photo = useMemo(() => (photos[currentIndex] || {}), [currentIndex, photos])
  const nextPhoto: Photo    = useMemo(() => (photos[currentIndex + 1] || {}), [currentIndex, photos])
  const hasPrev: boolean    = useMemo(() => currentIndex > 0, [currentIndex])
  const hasNext: boolean    = useMemo(() => currentIndex < photos.length - 1, [currentIndex, photos])

  const updatePhoto = (id: string, photo: PartialPhoto): void => {
    setPhotos(photos => photos.map((p: Photo) => (
      p.id === id ? ({ ...p, ...photo }) : p
    )))
  }

  const removeFace = (id: string): void => {
    updatePhoto(currentPhoto.id, {
      ...currentPhoto,
      faces: currentPhoto.faces!.filter((face) => face.id !== id)
    })
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
      .then(({ data }: ApiResponse) => { updatePhoto(currentPhoto.id, { faces: data }) })
      .catch((error) => { updatePhoto(currentPhoto.id, { faces: [] }) })
  }, [currentPhoto.url, apiUrl])

  // compress image if it hasn't been compressed already
  useEffect(() => {
    if (!currentPhoto.url || currentPhoto.compressed) { return }

    compressPhoto(currentPhoto.url, (compressed: string) => updatePhoto(currentPhoto.id, { compressed }))
  }, [currentPhoto.url, apiUrl])

  // compress next image if it hasn't been compressed already
  useEffect(() => {
    if (!nextPhoto.url || nextPhoto.compressed) { return }

    compressPhoto(nextPhoto.url, (compressed: string) => updatePhoto(nextPhoto.id, { compressed }))
  }, [nextPhoto.url, apiUrl])

  return {
    currentPhoto,
    removeFace,
    hasPrev, prev: () => setCurrentIndex(index => index - 1),
    hasNext, next: () => setCurrentIndex(index => index + 1)
  }
}
