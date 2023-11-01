// —————————————————————————————————————————————————————————————————————————————
// Prime Sieve

/** Returns array of all primes under `n` using the Sieve of Eratosthenes. */
export function primes(n:number) {
   const nats = Array.from({length: n}, () => true)
   const primes = [] as number[]

   for (let i=2; i<Math.trunc(Math.sqrt(n)); i++)
      if (nats[i]) for (let j=i**2; j<n; j+=i) nats[j] = false

   for (let i=2; i<n; i++) if (nats[i]) primes.push(i)
   return primes
}