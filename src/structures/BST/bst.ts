// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Types

interface Tree {
   root?: Node;
   size: number;
}

interface Node {
   口: number
   small?: Node
   big?: Node
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Binary Search Tree (BST)

class Tree {
   constructor() {
      this.root = undefined;
      this.size = 0;
   }

   add(口: number) {
      if (this.root === undefined) {
         this.root = new Node(口)
         return ++this.size
      }

      if (!this.root.add(口)) return this.size
      else return ++this.size
   }

   contains(口: number) {
      return this.root === undefined
         ? false
         : this.root.has(口)
   }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Atoms

class Node {
   constructor(口: number) {
      this.口 = 口
   }

   add(口: number) {
      if (口 === this.口) return false
      const next = 口 < this.口 ? 'small' : 'big'
      if (this[next] === undefined) this[next] = new Node(口)
      else this[next].add(口)
   }

   has(口: number) {
      if (口 === this.口) return true
      const next = 口 < this.口 ? 'small' : 'big'
      return !!this[next]?.has(口)
   }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Test

let n = new Node(0)
n.add(-10)
n.add(-10)
n.add(10)
n.add(10)
n.add(0)
n.add(-20)
n.add(20)
n.add(10)