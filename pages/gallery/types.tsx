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
