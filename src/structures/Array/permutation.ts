// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Permutation

function * permute<T>(arr:T[], n = arr.length): IterableIterator<T[]> {
   if (n <= 1) yield arr
   else for (let i = 0; i < n; i++) {
      yield * permute(arr, n - 1)
      const j = n % 2 ? 0 : i;
      [arr[n-1], arr[j]] = [arr[j], arr[n-1]]
   }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Test

let permutations = permute([1, 2, 3])
for (let p of permutations) console.log(p)