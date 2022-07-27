// —————————————————————————————————————————————————————————————————————————————
// Environment

type point = [number, number]

function norm(v: number[]) { return Math.hypot(...v) }
function dist(p:point) { return p[0]**2 + p[1]** 2}

// —————————————————————————————————————————————————————————————————————————————
// K Largest Euclidian Norms

function kClosest(points:point[], k:number): point[] {
   return points
      .sort((a, b) => dist(a) - dist(b))
      .slice(0, k)
}