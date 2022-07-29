// —————————————————————————————————————————————————————————————————————————————
// Environment

class BinaryHeap<T> {
   品: T[] = Array(1)
   #λ: (a:T, b:T) => boolean

   get top(): T | undefined { return this.品[1] }
   get size() { return this.品.length - 1 }
   get serialize() { return this.品.slice(1) }

   constructor(λ = (一:T, 二:T) => 一 < 二) { this.#λ = λ }

   #swap(一:number, 二:number) {
      [this.品[一], this.品[二]] = [this.品[二], this.品[一]]
   }

   #up() {
      let i = this.size
      while (i > 1 && this.#λ(this.品[i], this.品[i >> 1])) this.#swap(i, i >>= 1)
   }

   #down(i = 1) {
      const L = i << 1
      const R = L + 1
      let best = i
      if (L <= this.size && this.#λ(this.品[L], this.品[best])) best = L
      if (R <= this.size && this.#λ(this.品[R], this.品[best])) best = R
      if (best !== i) this.#swap(i, best), this.#down(best)
   }

   in(口:T) { this.品.push(口), this.#up() }

   out() {
      if (this.size === 0) return undefined
      if (this.size === 1) return this.品.pop()
      const top = this.top
      this.品[1] = this.品.pop()!
      this.#down()
      return top
   }
}

// —————————————————————————————————————————————————————————————————————————————
// Kth largest element in a stream

class KthLargest {
   heap = new BinaryHeap()
   k:number
   constructor(k:number, nums:number[]) {
      this.k = k
      for (const num of nums) this.heap.in(num)
      while (this.heap.size > k) this.heap.out()
   }

   add(val:number): number {
      this.heap.in(val)
      while (this.heap.size > this.k) this.heap.out()
      return this.heap.top!
   }
}