// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Types

function minDistance(w1:string, w2:string): number

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Core

function cartesianMatrix(w1:string, w2:string) {
   const matrix:[][]string

}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Recursive

function minDistance(w1:string, w2:string) {
   if (w1.length === 0) return w2.length
   if (w2.length === 0) return w1.length
   if (w1[0] === w2[0]) return minDistance(w1.slice(1), w2.slice(1))

   return 1 + Math.min(
      minDistance(w1.slice(1), w2),
      minDistance(w1, w2.slice(1)),
      minDistance(w1.slice(1), w2.slice(1))
   )
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Export

export default {
   minDistance
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   # Notes

   - https://en.wikipedia.org/wiki/Levenshtein_distance
 */
