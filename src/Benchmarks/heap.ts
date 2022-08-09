import BinaryHeap0 from "../structures/Heap/binaryHeapClean.ts"
import BinaryHeap1 from "../structures/Heap/binaryHeap.ts"
import PairingHeap from "../structures/Heap/pairingHeap.ts"
import shuffledNats from "./data/nats.json" assert { type: "json" }
import randomInts from "./data/randomInts.json" assert { type: "json" }

Deno.bench(
   "BinaryHeap0",
   () => {
      const heap = new BinaryHeap0<number>()
      for (const n of shuffledNats) heap.in(n)
      for (const n of heap.iter()) { }
      for (const n of randomInts) heap.in(n)
      for (const n of heap.iter()) { }
   }
)

Deno.bench(
   "BinaryHeap1",
   () => {
      const heap = new BinaryHeap1<number>()
      for (const n of shuffledNats) heap.in(n)
      for (const n of heap.iter()) { }
      for (const n of randomInts) heap.in(n)
      for (const n of heap.iter()) { }
   }
)

Deno.bench(
   "PairingHeap",
   () => {
      const heap = new PairingHeap<number>()
      for (const n of shuffledNats) heap.in(n)
      for (const n of heap.iter()) { }
      for (const n of randomInts) heap.in(n)
      for (const n of heap.iter()) { }
   }
)