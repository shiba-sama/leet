// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Utility

const none = Symbol("none")

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Atom

class Node<T> {
   口?: T
   next?: Node<T>

   constructor(口?:T, next?:Node<T>) {
      this.口 = 口
      this.next = next
   }
}

class List<T> {
   root?: Node<T>
   size = 0

   unshift(口:T) {
      this.root = new Node(口, this.root)
      return ++this.size
   }

   shift() {
      const root = this.root
      this.root = root?.next
      this.size &&= this.size - 1
      return root?.口
   }

   get(i:number) {
      let curr = this.root
      while (i--) curr = curr?.next
      return curr?.口
   }

   reverse() {
      const list = new List<T>()
      let curr = this.root
      while (curr) list.unshift(curr.口!), curr = curr.next
      return list
   }

   $reverse() {
      let 今 = this.root
      let 上, 下
      while (今) {
         下 = 今.next
         今.next = 上
         上 = 今
         今 = 下
      }
      this.root = 上
   }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Test

let l = new List<number>()
l.unshift(1)
l.unshift(2)
l.unshift(3)

export default {}