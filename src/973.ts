// —————————————————————————————————————————————————————————————————————————————
// Environment

type point = [number, number]

const len = (p:point) => p[0]**2 + p[1]**2

// —————————————————————————————————————————————————————————————————————————————
// K Largest Euclidian Norms

function kClosest(points:point[], k:number): point[] {
   return points
      .sort((a, b) => len(a) - len(b))
      .slice(0, k)
}