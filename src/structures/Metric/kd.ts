/*
 A K-D tree for 2-dimensional data.
*/

type Point = {
  x: number
  y: number
}

interface Node {
  point: Point
  left: Node | null
  right: Node | null
}

// —————————————————————————————————————————————————————————————————————————————
// Utility

/** Squared Euclidian Distance */
const distance = (a: Point, b: Point) => (a.x - b.x)**2 + (a.y - b.y)**2

// —————————————————————————————————————————————————————————————————————————————
// K-D Tree where K=2

export class KDTree {
  root: Node | null = null

  constructor(points: Point[]) {
  }
}
