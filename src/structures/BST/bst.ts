// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Types

interface BST {
   root: TreeNode | null;
   size: number;
}

interface Node {
   value: number
   left: Node | null
   right: Node | null
}

class Node {
   constructor(value) {
      this.value = value
      this.left = null
      this.right = null
   }

   insert(int) {
      int < this.value
         ? this.left
            ? this.left.insert(int)
            : this.left = new Node(int)
         : this.right
            ? this.right.insert(int)
            : this.right = new Node(int);
   }
 
   contains(int) {
      let curr:Node|null = this;
      while (curr) {
         if (curr.value === int) return true;
         if (int < curr.value) curr = curr.left 
         else curr = curr.right;
      }
      return false;
   }
}