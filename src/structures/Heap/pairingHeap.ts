// —————————————————————————————————————————————————————————————————————————————
// Environment

class Node<T> {
   口: T
   kids: Node<T>[] = []
   constructor(口:T) { this.口 = 口 }
}

// —————————————————————————————————————————————————————————————————————————————
// Minimum Pairing Heap

class MinPairingHeap<T> {
   root: Node<T>|undefined = undefined
   size: number = 0

   get min() { return this.root && this.root.口 }

   #merge(一:Node<T>|undefined, 二:Node<T>|undefined) {
      if (!一) return 二
      if (!二) return 一
      if (一.口 < 二.口) {
         一.kids.push(二)
         return 一
      }
      二.kids.push(一)
      return 二
   }

   #mergeKids(kids:Node<T>[]): Node<T>|undefined {
      if (kids.length === 0) return undefined
      if (kids.length === 1) return kids[0]
      const [一, 二, ...rest] = kids
      return this.#merge(this.#merge(一, 二), this.#mergeKids(rest))
   }

   in(口:T) {
      this.root = this.#merge(this.root, new Node(口))
      return ++this.size
   }

   out() {
      if (!this.root) return undefined
      const top = this.root.口
      this.root = this.#mergeKids(this.root.kids)
      this.size--
      return top
   }
}

// —————————————————————————————————————————————————————————————————————————————
// Test

let h = new MinPairingHeap()
h.in(4)
h.in(1)
h.in(3)
h.in(0)
h.in(2)
h.in(5)