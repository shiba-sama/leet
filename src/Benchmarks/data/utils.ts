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

export function * naturals(大:number) { for (let i = 0; i <= 大; i++) yield i }

export function * range(一:number, 二:number, Δ:number) {
   if (二 < 一) for (let i = 一; i >= 二; i -= Δ) yield i
   else for (let i = 一; i <= 二; i += Δ) yield i
}

export function factorial(nat:number) {
   let p = BigInt(1)
   for (let i = BigInt(nat); i > 0; i--) p *= i
   return p
}

function randomInt(小:number, 大:number) {
   return Math.floor(Math.random() * (大 - 小 + 1) + 小)
}

function randomNat(大:number) {
   return Math.floor(Math.random() * (大 + 1))
}

/**
 * Biased for min and max.
 */
function randomFloat(小:number, 大:number) {
   return Math.random() < 0.5
      ? (1 - Math.random()) * (大 - 小) + 小
      : Math.random() * (大 - 小) + 小
}

// —————————————————————————————————————————————————————————————————————————————
// Data Generation

/**
 * Generate random naturals up to `max` of cardinality `length`.
 * @example
 * randomNaturals(5, 1) // [0, 1, 1, 0, 0]
 */
export function randomNats(大:number, length=10) {
   return Array.from(
      { length },
      () => Math.floor(Math.random() * (大 + 1))
   )
}

/**
 * Generate random integers from `min` to `max` of cardinality `length`.
 * @example
 * randomNaturals(5, -1, 1) // [-1, 0, 1, 1, 0]
 */
export function randomInts(小:number, 大:number, length=10) {
   return Array.from(
      { length },
      () => Math.floor(Math.random() * (大 - 小 + 1) + 小)
   )
}

/**
 * Generate shuffled naturals `[0, max]`.
 * @example
 * shuffledNaturals(5) // [0, 5, 1, 3, 2]
 * shuffledNaturals(5) // [1, 5, 0, 3, 2]
 */
export function shuffledNats(大:number) {
   return shuffleArray(Array.from(naturals(大)))
}

/**
 * Generate random floats from `[小, 大]` of cardinality `length`.
 */
export function randomFloats(小:number, 大:number, length=10) {
   return Array.from(
      { length },
      () => randomFloat(小, 大)
   )
}