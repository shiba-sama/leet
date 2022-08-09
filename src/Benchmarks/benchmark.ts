// —————————————————————————————————————————————————————————————————————————————
// Utility

/**
 * Fischer-Yates + Dursenfeld in-place shuffle.
 */
export function shuffleArray<T>(arr: T[]) {
   for (let i = arr.length - 1; 0 < i; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
   }
   return arr
}

/**
 * Returns a randomly permuted copy of `arr` in which all elements are moved.
 */
export function sattoloCycle<T>(arr:T[]) {
   for (let i = arr.length - 1; 0 < i; i--) {
      const j = Math.floor(Math.random() * i);
      [arr[i], arr[j]] = [arr[j], arr[i]];
   }
   return arr
}

export function * naturals(max:number) { for (let i = 0; i <= max; i++) yield i }

export function * range(一:number, 二:number, Δ:number) {
   if (二 < 一) for (let i = 一; i >= 二; i -= Δ) yield i
   else for (let i = 一; i <= 二; i += Δ) yield i
}

export function factorial(nat:number) {
   let p = BigInt(1)
   for (let i = BigInt(nat); i > 0; i--) p *= i
   return p
}

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