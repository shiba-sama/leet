// —————————————————————————————————————————————————————————————————————————————
// Prime Sieve

/** Returns array of all primes under `n` using the Sieve of Eratosthenes. */
export function primes(n:number) {
   const nums = Array.from({length: n}, () => true)
   const primes = [] as number[]

   for (let i=2; i<Math.trunc(Math.sqrt(n)); i++)
      if (nums[i]) for (let j=i**2; j<n; j+=i) nums[j] = false

   for (let i=2; i<n; i++) if (nums[i]) primes.push(i)
   return primes
}