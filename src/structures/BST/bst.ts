// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Types

interface BST {
   root: Node | null;
   size: number;
}

interface Node {
   口: number
   小: Node | undefined
   大: Node | undefined
}

export default {
   
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Binary Search Tree (BST)

class BST {
   root: Node | undefined = undefined
   size = 0
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Atoms

class Node {
   constructor(value) {
      this.口 = value
      this.小 = undefined
      this.大 = undefined
   }

   insert(口) {
      if (口 === this.口) return false
      const next = 口 < this.口 ? '小' : '大'
      if (this[next] === undefined) this[next] = new Node(口)
      else this[next].insert(口)
   }

   contains(口) {
      if (口 === this.口) return true
      const next = 口 < this.口 ? '小' : '大'
      return !!this[next]?.contains(口)
   }
}
