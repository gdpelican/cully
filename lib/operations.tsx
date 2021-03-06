import { WIDTH, HEIGHT } from './constants'

export function compressPhoto(url: string, callback: Function): void {
  const canvas: HTMLCanvasElement = document.createElement('canvas')
  canvas.width = WIDTH
  canvas.height = HEIGHT

  fetch(`${process.env.NEXT_PUBLIC_PROXY_URL}/${url}`)
    .then(response => response.blob())
    .then((blob) => {
      const image: HTMLImageElement = new Image()
      image.src = URL.createObjectURL(blob)
      image.onload = () => {
        const context = canvas.getContext('2d')

        if (!context) throw new Error("Unable to fetch drawing canvas context")
        context.drawImage(image, 0, 0, canvas.width, canvas.height)
        canvas.toBlob(blob => callback(URL.createObjectURL(blob)), 'image/jpeg', 0.7)
      }
    })
}
