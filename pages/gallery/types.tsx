export interface Face {
  id: string,
  xmin: number,
  xmax: number,
  ymin: number,
  ymax: number
}

export interface Photo {
  id: string,
  filename: string,
  url: string,
  faces?: Array<Face>,
  compressed?: string
}

export interface PartialPhoto {
  id?: null,
  filename?: string,
  url?: string,
  faces?: Array<Face>,
  compressed?: string
}

export interface GalleryContext {
  currentPhoto: (Photo | PartialPhoto),
  removeFace: (id: string) => void,
  hasPrev: boolean,
  hasNext: boolean,
  prev: () => void,
  next: () => void
}

export interface ApiResponse {
  data: Array<Face>
}
