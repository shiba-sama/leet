// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Powerset

/**
 * Return the powerset of `arr`. Cannot handle lengths greater than 23.
 */
function powerset(arr:any[]) {
   return Array.from(
      { length: 1 << arr.length },
      (_, i) => arr.filter((_, j) => 1 << j & i)
   )
}

/**
 * Iteratively yields all subsets of `arr`.
 */
function * subsets(arr:any[]) {
   const max = 1 << arr.length
   for (let i = 0; i < max; i++)
      yield arr.filter((_, j) => 1 << j & i)
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Extra

function λpowerset(arr:number[]): number[][] {
   function loop(i:number, set:number[]) {
      if (i === arr.length) return acc.push(set)
      loop(i + 1, set)
      loop(i + 1, set.concat(arr[i]))
   }
   const acc: number[][] = []
   loop(0, [])
   return acc
}

function * subsets1(arr:any[]) {
   const max = 2 ** arr.length
   for (let i = 0; i < max; i++) {
      const keys = i.toString(2).padStart(arr.length, '0')
      yield arr.filter((_, j) => keys[j] === '1')
   }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Export

export {
   powerset,
   subsets,
}
