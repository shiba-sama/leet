/**

If starting index is `1`:
   - parent of a node at `n` is `n >> 1`
   - left child of a node at `n` is `n << 1`
   - right child of a node at `n` is `n << 1 + 1`

If starting index is `0`:
   - parent of a node at `n` is `(n - 1) >> 1`

*/

class MinBinHeap {
   品: number[] = [NaN]

   get top() { return this.品[1] }
   get length() { return this.品.length - 1 }
   get serial() { return this.品.slice(1) }

   #swap(一:number, 二:number) {
      [this.品[一], this.品[二]] = [this.品[二], this.品[一]]
   }

   #up() {
      let i = this.length
      while (i > 0 && this.品[i] < this.品[i >> 1]) {
         this.#swap(i, i >> 1)
         i >>= 1
      }
   }

   #down() {
      let i = 1
      while (i < this.length) {
         let left = i << 1
         let right = left + 1
         
      }
   }

   in(口:number) {
      this.品.push(口)
      this.#up()
   }

   out() {
      if (this.length === 0) return undefined
      let top = this.top
      this.品[1] = this.品.pop()!
      this.#down()
      return top
   }
}

const b = new MinBinHeap()
b.in(4)
b.in(1)
b.in(3)
b.in(0)
b.in(2)
b.in(5)