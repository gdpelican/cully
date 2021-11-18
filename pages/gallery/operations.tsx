export function applyBlobToCanvas(blob: Blob, callback: Function, canvas: HTMLCanvasElement): void {
  // TODO: dynamic sizing
  canvas.width = 1200
  canvas.height = 800

  const image = new Image()
  image.src = URL.createObjectURL(blob)
  image.onload = () => {
    canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height)
    canvas.toBlob(callback, 'image/jpeg', 0.7)
  }
}
export function compressPhoto(url: string, callback: Function, canvas: HTMLCanvasElement = document.createElement('canvas')): void {
  // TODO: host cors-anywhere for CORS workaround
  fetch(`http://localhost:8080/${url}`)
    .then(response => response.blob())
    .then(blob => applyBlobToCanvas(blob, callback, canvas))
}
