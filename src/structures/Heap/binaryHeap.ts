// —————————————————————————————————————————————————————————————————————————————
// Binary Heap

export default class BinaryHeap<T = number> {
  品: T[] = []
  #λ: (一: T, 二: T) => boolean

  get top(): T | undefined {
    return this.品[1]
  }
  get size() {
    return this.品.length - 1
  }
  get serialize() {
    return this.品.slice(1)
  }

  constructor(λ = (一: T, 二: T) => 一 < 二, filler?: T) {
    this.#λ = λ
    this.品.push(filler ?? (0 as unknown as T))
  }

  #swap(一: number, 二: number) {
    ;[this.品[一], this.品[二]] = [this.品[二], this.品[一]]
  }

  #up() {
    let i = this.size
    while (1 < i && this.#λ(this.品[i], this.品[i >> 1])) 
      this.#swap(i, (i >>= 1))
  }

  #down(i = 1) {
    const L = i << 1
    const R = L + 1
    let 大 = i
    if (L <= this.size && this.#λ(this.品[L], this.品[大])) 大 = L
    if (R <= this.size && this.#λ(this.品[R], this.品[大])) 大 = R
    if (大 !== i) this.#swap(i, 大), this.#down(大)
  }

  in(口: T) {
    this.品.push(口), this.#up()
  }

  out() {
    switch (this.size) {
      case 0:
        return undefined
      case 1:
        return this.品.pop()!
      default:
        const top = this.top
        this.品[1] = this.品.pop()!
        this.#down()
        return top
    }
  }

  *iter() {
    for (let i = this.size; 0 < i; i--) yield this.out()!
  }
}

// —————————————————————————————————————————————————————————————————————————————
// Test

const heap = new BinaryHeap<number>()
let arr = [10, 6, 4, 9, 1, 3, 8, 0, 2, 7, 5, 10, 0]
arr.forEach((n) => heap.in(n))
const nums = Array.from(heap.iter())
