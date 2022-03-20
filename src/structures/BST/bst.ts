// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Types

interface BST {
   root: Node | null;
   size: number;
}

interface Node {
   口: number
   小: Node | null
   大: Node | null
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Binary Search Tree (BST)

class BST {
   root: Node | null = null
   size = 0

   contains(int) {
      let curr:Node|null = this.root;
      while (curr) {
         if (curr.口 === int) return true;
         if (int < curr.口) curr = curr.小 
         else curr = curr.大;
      }
      return false;
   }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Atoms

class Node {
   constructor(value) {
      this.口 = value
      this.小 = null
      this.大 = null
   }

   insert(n) {
      n < this.口
         ? this.小
            ? this.小.insert(n)
            : this.小 = new Node(n)
         : this.大
            ? this.大.insert(n)
            : this.大 = new Node(n);
   }
}
