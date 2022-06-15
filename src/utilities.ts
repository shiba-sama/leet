// —————————————————————————————————————————————————————————————————————————————
// Types

type LinkedList<T> = {
   val: T
   next: LinkedList<T> | null
}

// —————————————————————————————————————————————————————————————————————————————
// Functions

/**
 * Maps a linked `list` with properties `val` and `next` into an array.
 */
export function listToArray<T>(list:LinkedList<T>) {
   const results:T[] = []
   let curr = list

   while (curr) {
      results.push(curr.val)
      curr = curr.next!
   }

   return results
}