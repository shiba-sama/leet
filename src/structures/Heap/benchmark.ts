// —————————————————————————————————————————————————————————————————————————————
// Utility

function shuffleArray<T>(arr: T[]) {
   for (let i = arr.length - 1; 0 < i; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
   }
   return arr
}

function * naturals(max:number) { for (let i = 0; i <= max; i++) yield i }

// —————————————————————————————————————————————————————————————————————————————
// Data Generation

/**
 * @example
 * randomNaturals(5, 1) // [0, 1, 1, 0, 0]
 */
function randomNats(max:number, length=10) {
   return Array.from(
      { length }, 
      () => Math.floor(Math.random() * (max + 1))
   )
}

/**
 * Generates integers inclusively from `min` to `max`.
 * @example
 * randomNaturals(5, -1, 1) // [-1 0, 1, 1, 0]
 */
function randomInts(min:number, max:number, length=10) {
   return Array.from(
      { length }, 
      () => Math.floor(Math.random() * (max - min + 1) + min)
   )
}

function shuffledNats(max:number) {
   return shuffleArray(Array.from(naturals(max)))
}