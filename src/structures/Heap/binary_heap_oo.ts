/**

If starting index is `1`:
   - parent of a node at `n` is `n >> 1`
   - left child of a node at `n` is `n << 1`
   - right child of a node at `n` is `n << 1 + 1`

If starting index is `0`:
   - parent of a node at `n` is `(n - 1) >> 1`
   
*/

class MinBinHeap<T> {
   品: T[] = []

   #swap(一:number, 二:number) { [this.品[一], this.品[二]] = [this.品[二], this.品[一]] }

   #up(下:number) {
      let 上 = 下 >> 1
      while (1 < 上 && this.品[下] < this.品[上]) {
         this.#swap(下, 上)
         上 >>= 1
      }
   }

   in(口: T) {
      this.品.push(口)
      this.#up(this.品.length - 1)
   }

   top(): T { return this.品[0] }
}

const b = new MinBinHeap<number>()
b.in(4)
b.in(1)
b.in(3)
b.in(2)
b.in(0)
b.in(5)