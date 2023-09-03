import BinaryHeap0 from "../structures/Heap/binaryHeap0.ts"
import BinaryHeap1 from "../structures/Heap/binaryHeap.ts"
import BinaryHeapAlt from "../structures/Heap/binaryHeapAlt.ts"
import shuffledNats from "./data/nats.json" assert { type: "json" }
import randomInts from "./data/randomInts.json" assert { type: "json" }
import randomFloats from "./data/randomFloats.json" assert { type: "json" }

type job = { id: number, priority: number }

const jobs:job[] = shuffledNats.map(id => ({ 
   id,
   priority: Math.random() 
}))

const λ = (a:job, b:job) => a.id < b.id

// Deno.bench(
//    "BinaryHeap0",
//    () => {
//       const heap = new BinaryHeap0<job>(λ)
//       jobs.forEach(j => heap.in(j))
//       for (const j of heap.iter()) { }
//    }
// )

Deno.bench(
   "BinaryHeap1",
   () => {
      const heap = new BinaryHeap1<job>(λ)
      jobs.forEach(j => heap.in(j))
      for (const j of heap.iter()) { }
   }
)

// Deno.bench(
//    "BinaryHeapAlt0",
//    () => {
//       const heap = new BinaryHeapAlt<number>()
//       for (const n of shuffledNats) heap.in(n)
//       for (const n of heap.iter()) { }
//       for (const n of randomInts) heap.in(n)
//       for (const n of heap.iter()) { }
//    }
// )