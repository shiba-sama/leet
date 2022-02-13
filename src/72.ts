// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Types

function levenshtein(w1:string, w2:string): number

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Core

function levenshtein(w1:string, w2:string) {
   if (w1.length === 0) return w2.length;
   if (w2.length === 0) return w1.length;
 
   const matrix = Array.from(
      { length: w1.length + 1 }, 
      () => Array(w2.length + 1).fill(0)
   )
}
