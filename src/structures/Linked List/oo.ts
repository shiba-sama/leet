// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Utility

const none = Symbol("none")

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Atom

class Node<T> {
   value?: T
   next?: Node<T>

   constructor(value?:T, next?:Node<T>) {
      this.value = value
      this.next = next
   }
}

class List<T> {
   root?: Node<T>
   size = 0

   unshift(value:T) {
      this.root = new Node(value, this.root)
      return ++this.size
   }

   shift() {
      const root = this.root
      this.root = root?.next
      this.size &&= this.size - 1
      return root?.value
   }

   get(i:number) {
      let curr = this.root
      while (i--) curr = curr?.next
      return curr?.value
   }

   reverse() {
      const list = new List()
      let curr = this.root
      while (curr) list.unshift(curr.value), curr = curr.next
      return list
   }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Test

let l = new List()
l.unshift(1)
l.unshift(2)
l.unshift(3)

let reverse = l.reverse()

export default {}