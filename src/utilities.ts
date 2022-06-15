// —————————————————————————————————————————————————————————————————————————————
// Types

type LinkedList<T> = {
   val: T
   next: LinkedList<T> | null
}

// —————————————————————————————————————————————————————————————————————————————
// Linked List

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

// —————————————————————————————————————————————————————————————————————————————
// Array

/**
 * Merge two sorted numeric arrays.
 */
export function mergeSortedVectors(v1:number[], v2:number[]): number[] {
   const results:number[] = []
   let i = 0
   let j = 0

   while (i < v1.length && j < v2.length) {
      if (v1[i] < v2[j]) results.push(v1[i]), i++
      else results.push(v2[j]), j++
   }

   while (i < v1.length) results.push(v1[i]), i++
   while (j < v2.length) results.push(v2[j]), j++

   return results
}