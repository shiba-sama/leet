// —————————————————————————————————————————————————————————————————————————————
// Environment

type point = [number, number]

const len = (p:point) => p[0]**2 + p[1]**2

// —————————————————————————————————————————————————————————————————————————————
// K Largest Euclidian Norms

const kClosest = (points:point[], k:number): point[] => points
   .sort((a, b) => len(a) - len(b))
   .slice(0, k)