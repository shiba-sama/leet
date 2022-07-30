// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Environment

/** Yield permutations through Heap's Method. */
function * p<T>(arr:T[], n = arr.length): IterableIterator<T[]> {
   if (n <= 1) yield arr.slice()
   else for (let i = 0; i < n; i++) {
      yield * p(arr, n - 1)
      const j = n % 2 ? 0 : i;
      [arr[n-1], arr[j]] = [arr[j], arr[n-1]]
   }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// All possible permutations

function permute(arr:number[]) {
   return Array.from(p(arr))
}