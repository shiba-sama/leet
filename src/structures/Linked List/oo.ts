// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Type

interface List {
   root: Node | undefined // undefined if 0
   size: number
   newList(...args): [Node, Node]
}

interface Node {
   value: any
   next: Node | undefined // undefined if last
   constructor(value?: any, next?: Node)
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Utility

const none = Symbol("none")

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Atom

class Node {
   constructor(value=none, next?:Node) {
      this.value = value
      this.next = next
   }
}

class List {
   root: Node | undefined = undefined
   size: number = 0

   push(value: any) {
      this.root = new Node(value, this.root)
      return ++this.size
   }

   pop() {
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
      while (curr) list.push(curr.value), curr = curr.next
      return list
   }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Test

let l = new List()
l.push(1)
l.push(2)
l.push(3)

let reverse = l.reverse()

export default {}