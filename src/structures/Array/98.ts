class TreeNode {
   val: number
   left: TreeNode | null
   right: TreeNode | null
   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = (val === undefined ? 0 : val)
      this.left = (left === undefined ? null : left)
      this.right = (right === undefined ? null : right)
   }
}

function isValidBST(root: TreeNode | null): boolean {
   function check(node: TreeNode | null, min: number, max: number): boolean {
      if (node === null) return true
      if (node.val <= min || node.val >= max) return false
      return check(node.left, min, node.val) && check(node.right, node.val, max)
   }
   return check(root, -Infinity, Infinity)
}

export default {}