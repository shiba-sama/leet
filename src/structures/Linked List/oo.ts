// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Utility

const none = Symbol("none")

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Atom

class Node {
   value:any
   next?:Node|undefined
   constructor(value:any=none, next?:Node) {
      this.value = value
      this.next = next
   }
}

class List {
   root:Node|undefined = undefined
   size:number = 0

   unshift(value:any) {
      this.root = new Node(value, this.root)
      return ++this.size
   }

   shift() {
      const root = this.root
      this.root = root?.next
      this.size--
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