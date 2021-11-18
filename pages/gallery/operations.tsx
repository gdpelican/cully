export function compressPhoto(url: string, callback: Function): void {
  const canvas: HTMLCanvasElement = document.createElement('canvas')
  // TODO: dynamic sizing
  canvas.width = 900
  canvas.height = 600

  // TODO: host cors-anywhere for CORS workaround
  fetch(`http://localhost:8080/${url}`)
    .then(response => response.blob())
    .then((blob) => {
      const image = new Image()
      image.src = URL.createObjectURL(blob)
      image.onload = () => {
        canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height)
        canvas.toBlob(blob => callback(URL.createObjectURL(blob)), 'image/jpeg', 0.7)
      }
    })
}
