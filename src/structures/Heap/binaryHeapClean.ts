// —————————————————————————————————————————————————————————————————————————————
// Binary Heap

class BinaryHeap<T> {
   品: T[] = []
   #λ: (a:T, b:T) => boolean

   get top(): T | undefined { return this.品[0] }
   get size() { return this.品.length }
   get serialize() { return this.品.slice() }

   constructor(λ = (一:T, 二:T) => 一 < 二) { this.#λ = λ }

   #swap(一:number, 二:number) {
      [this.品[一], this.品[二]] = [this.品[二], this.品[一]]
   }

   #up() {
      let 下 = this.size - 1
      let 上 = (下 - 1) >> 1
      while (下 > 0 && this.#λ(this.品[下], this.品[上]))
         this.#swap(下, 上),
         [下, 上] = [上, (上 - 1) >> 1]
   }

   #down(i = 0) {
      const L = (i << 1) + 1
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
      this.品[0] = this.品.pop()!
      this.#down()
      return top
   }

   *iter(): IterableIterator<T> {
      for (let i = this.size; 0 < i; i--) yield this.out()!
   }
}

// —————————————————————————————————————————————————————————————————————————————
// Test

const heap = new BinaryHeap<number>()
let arr = [10, 6, 4, 9, 1, 3, 8, 0, 2, 7, 5, 10, 0]
arr.forEach(n => heap.in(n))
console.log(...heap.iter())