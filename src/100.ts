// —————————————————————————————————————————————————————————————————————————————
// Environment

class TreeNode {
   val: number
   left: TreeNode | null
   right: TreeNode | null
   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = val === undefined ? 0 : val
      this.left = left === undefined ? null : left
      this.right = right === undefined ? null : right
   }
}

type BST = TreeNode | null

// —————————————————————————————————————————————————————————————————————————————
// Solve

function isSameTree(一:BST, 二:BST) {
   if (一 === null || 二 === null) return 一 === 二

   return 一.val === 二.val 
      && isSameTree(一.left, 二.left) 
      && isSameTree(一.right, 二.right)
}