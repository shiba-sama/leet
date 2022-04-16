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

function dict(obj?: Object): Object
function dict(obj) { return Object.assign(Object.create(null), obj) }

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Atoms

class List {
   root: Node | undefined = undefined
   size: number = 0

   newList(...args): [Node, Node] {
      const first = new Node(args[0])
      let last = first
      for (const arg of args.slice(1))
         last.next = new Node(arg, last),
         last = last.next
      return [first, last]
   }

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
      while (curr) {
         list.push(curr.value)
         curr = curr.next
      }
      return list
   }
}

class Node {
   constructor(value=none, next?:Node) {
      this.value = value
      this.next = next
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