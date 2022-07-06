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

// —————————————————————————————————————————————————————————————————————————————
// Tree

function * depthFirstSearch<T>(node:T, keys=["left", "right"], value="val"): IterableIterator<T> {
   const stack = [node]
   let curr = node
   while (stack.length) {
      curr = stack.pop()!
      yield curr[value]
      for (const key of keys) if (key in curr) stack.push(curr[key])
   }
}

function * breadthFirstSearch<T>(node:T, keys=["left", "right"], value="val"): IterableIterator<T> {
   const queue = [node]
   let curr = node
   while (queue.length) {
      curr = queue.shift()!
      yield curr[value]
      for (const key of keys) if (key in curr) queue.push(curr[key])
   }
}

let tree = {
   val: "root",
   left: {
      val: "left",
      left: {
         val: "left.left",
      },
      right: {
         val: "left.right",
      }
   },
   right: {
      val: "right",
      right: {
         val: "right.right",
      }
   }
}

let walk = breadthFirstSearch(tree)
for (const w of walk) console.log(w)