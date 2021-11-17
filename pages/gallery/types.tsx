export interface Face {
  id: string,
  xmin: number,
  xmax: number,
  ymin: number,
  ymax: number
}

export interface Image {
  id: string,
  filename: string,
  url: string,
  faces?: Array<Face>
}
