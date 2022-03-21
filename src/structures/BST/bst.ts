// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Types

interface 森 {
   root: 木 | null;
   size: number;
}

interface 木 {
   口: number
   小: 木 | undefined
   大: 木 | undefined
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Binary Search Tree (BST)

class 森 {
   constructor() {
      this.root = null;
      this.size = 0;
   }

   add(口: number) {
      if (this.root === null) {
         this.root = new 木(口)
         this.size++
         return
      }
   }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Atoms

class 木 {
   constructor(value) {
      this.口 = value
      this.小 = undefined
      this.大 = undefined
   }

   insert(口) {
      if (口 === this.口) return false
      const next = 口 < this.口 ? '小' : '大'
      this[next] === undefined 
         ? this[next] = new 木(口)
         : this[next].insert(口)
   }

   contains(口) {
      if (口 === this.口) return true
      const next = 口 < this.口 ? '小' : '大'
      return !!this[next]?.contains(口)
   }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Test

let n = new 木(0)
n.insert(-10)
n.insert(-10)
n.insert(10)
n.insert(10)
