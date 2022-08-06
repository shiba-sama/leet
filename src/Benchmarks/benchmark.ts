// —————————————————————————————————————————————————————————————————————————————
// Utility

export function shuffleArray<T>(arr: T[]) {
   for (let i = arr.length - 1; 0 < i; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
   }
   return arr
}

export function * naturals(max:number) { for (let i = 0; i <= max; i++) yield i }

// —————————————————————————————————————————————————————————————————————————————
// Data Generation

/**
 * Generate random naturals up to `max` of cardinality `length`.
 * @example
 * randomNaturals(5, 1) // [0, 1, 1, 0, 0]
 */
export function randomNats(max:number, length=10) {
   return Array.from(
      { length }, 
      () => Math.floor(Math.random() * (max + 1))
   )
}

/**
 * Generate random integers from `min` to `max` of cardinality `length`.
 * @example
 * randomNaturals(5, -1, 1) // [-1, 0, 1, 1, 0]
 */
export function randomInts(min:number, max:number, length=10) {
   return Array.from(
      { length }, 
      () => Math.floor(Math.random() * (max - min + 1) + min)
   )
}

/**
 * Generate shuffled naturals `0` to `max`.
 * @example
 * shuffledNaturals(5) // [0, 5, 1, 3, 2]
 * shuffledNaturals(5) // [1, 5, 0, 3, 2]
 */
export function shuffledNats(max:number) {
   return shuffleArray(Array.from(naturals(max)))
}