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

const distance = (a:Point, b:Point) => (a.x - b.x)**2 + (a.y - b.y)**2

// —————————————————————————————————————————————————————————————————————————————
// K-D Tree where K=2

export class KDTree {
  root: Node | null = null

  insert(point: Point) {
    if (this.root === null) {
      this.root = { point, left: null, right: null }
    } 
    else {
      this.#insertNode(this.root, point, 0)
    }
  }

  #insertNode(node: Node, point: Point, depth: number) {
    const dimension = depth % 2

    if (point[dimension] < node.point[dimension]) {
      if (node.left === null) {
        node.left = { point, left: null, right: null }
      } 
      else {
        this.#insertNode(node.left, point, depth + 1)
      }
    } else {
      if (node.right === null) {
        node.right = { point, left: null, right: null }
      } 
      else {
        this.#insertNode(node.right, point, depth + 1)
      }
    }
  }
}