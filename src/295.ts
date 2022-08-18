// —————————————————————————————————————————————————————————————————————————————
// Binary Heap

class BinaryHeap<T> {
   品: T[] = [NaN as unknown as T]
   #λ: (一:T, 二:T) => boolean

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
      let 大 = i
      if (L <= this.size && this.#λ(this.品[L], this.品[大])) 大 = L
      if (R <= this.size && this.#λ(this.品[R], this.品[大])) 大 = R
      if (大 !== i) this.#swap(i, 大), this.#down(大)
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

   *iter(): IterableIterator<T> {
      for (let i = this.size; 0 < i; i--) yield this.out()!
   }
}

// —————————————————————————————————————————————————————————————————————————————
// Median Stream

class MedianStream {
   小 = new BinaryHeap<number>();
   大 = new BinaryHeap<number>((一, 二) => 一 > 二);

   in(口:number) {
      this.小.in(口)
      this.大.in(-this.小.out()!)
      if (this.小.size < this.大.size) this.小.in(-this.大.out()!)
         this.小.in(-this.大.out()!)
   }

   get median() {
      return this.小.size > this.大.size
         ? this.小.top
         : (this.小.top! - this.大.top!) / 2
   }
}

// —————————————————————————————————————————————————————————————————————————————
// Test

function * naturals(max:number) { for (let i = 0; i <= max; i++) yield i }
let from_0_to_100 = Array.from(naturals(100))

let b = new BinaryHeap<number>((一, 二) => 一 > 二)
from_0_to_100.forEach(b.in.bind(b))