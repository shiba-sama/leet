/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Commentary

   - `1 << j` corresponds to a unit vector for the bitwise space.
   - `i` represents all possible values from `0` to `2 ** arr.length`.
   - while walking through all choices of `i` we use the unit vector `1 << j` to
     check whether a bit in `i` is on or off during a specific combination.
 */

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Powerset

/** Return the powerset of `arr`. Cannot handle lengths greater than 23. */
function powerset(arr:any[]) {
   return Array.from(
      { length: 1 << arr.length },
      (_, i) => arr.filter((_, j) => 1 << j & i)
   )
}

/** Iteratively yields all subsets of `arr`. */
function * subsets(arr:any[]) {
   const max = 1 << arr.length
   for (let i = 0; i < max; i++)
      yield arr.filter((_, j) => 1 << j & i)
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Extra

function λpowerset(arr:any[]): any[][] {
   function loop(i:number, set:any[]) {
      if (i === arr.length) return acc.push(set)
      loop(i + 1, set)
      loop(i + 1, set.concat(arr[i]))
   }
   const acc: any[][] = []
   loop(0, [])
   return acc
}

function * subs(arr:any[]) {
   const max = 2 ** arr.length
   for (let i = 0; i < max; i++) {
      const keys = i.toString(2).padStart(arr.length, '0')
      yield arr.filter((_, j) => keys[j] === '1')
   }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Test

console.log(
   powerset([1, 2, 3, 'meow'])
)