// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Type

interface Node {
   value: any
   next: Node | undefined // undefined if last
   constructor(value?: any, next?: Node)
}

interface List {
   root: Node | undefined // undefined if 0
   size: number
   newList(...args): [Node, Node]
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Utility

const none = Symbol("none")

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Atom

class Node {
   constructor(value:any=none, next?:Node) {
      this.value = value
      this.next = next
   }
}

class List {
   root:Node|undefined = undefined
   size:number = 0

   unshift(value: any) {
      this.root = new Node(value, this.root)
      return ++this.size
   }

   shift() {
      if (this.size === 0) return undefined
      const root = this.root
      this.root = root?.next // undefined if last
      this.size--
      return root?.value
   }

   get(i: number) {
      let curr = this.root
      while (i--) curr = curr?.next
      return curr?.value
   }

   reverse() {
      const list = new List()
      let curr = this.root
      while (curr) list.shift(curr.value), curr = curr.next
      return list
   }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Test

let l = new List()
l.shift(1)
l.shift(2)
l.shift(3)

let reverse = l.reverse()

export default {}