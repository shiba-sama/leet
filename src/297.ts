// —————————————————————————————————————————————————————————————————————————————
// Environment

class TreeNode {
   val: number
   left: TreeNode | null
   right: TreeNode | null
   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
   }
}

type Tree = TreeNode | null

function Node(val:number, left:Tree=null, right:Tree=null): Tree {
   let obj = Object.create(null)
   obj.val = val
   obj.left = left
   obj.right = right
   return obj
}

// —————————————————————————————————————————————————————————————————————————————
// Serial + Deserialize a Binary Tree

function serialize(tree:Tree) {
   if (tree === null) return null
   const 品 = [] as number[]
   function crawl(node:Tree) {
      if (node === null) {
         品.push(NaN)
         return
      }
      品.push(node.val)
      crawl(node.left)
      crawl(node.right)
   }
   crawl(tree)
   return 品
}

function deserialize(品:number[]) {
   function crawl(node:TreeNode) {
      const val = 品.shift()
      if (Number.isNaN(val) || val === undefined) return null
      node.val = val
      node.left = crawl(new TreeNode())
      node.right = crawl(new TreeNode())
      return node
   }
   return 品 && crawl(new TreeNode())
}

//      0
//     / \
//    1   2
//   / \ / \
//  n  n 5  6
//      /  / \
//    nn  11  n

// —————————————————————————————————————————————————————————————————————————————
// Test

let t0 = new TreeNode(
   0, 
   new TreeNode(1), 
   new TreeNode(
      2, 
      new TreeNode(5), 
      new TreeNode(
         6, 
         new TreeNode(13)
      )
   )
)

let t1 = new TreeNode(
   1,
   new TreeNode(2),
   new TreeNode(
      3,
      new TreeNode(4),
      new TreeNode(5)
   )
)

let s = serialize(t0)
let d = deserialize(s!)
console.log(s)

// —————————————————————————————————————————————————————————————————————————————
// Alternative

function code(tree:Tree) {
   if (tree === null) return tree
   const map = new Map<number, number>()
   function crawl(node:TreeNode, i:number) {
      map.set(node.val, i)
      if (node?.left) {
         crawl(node.left, i * 2 + 1)
         map.set(i * 2 + 1, node.left.val)
      }
      if (node?.right) {
         crawl(node.right, i * 2 + 2)
         map.set(i * 2 + 2, node.right.val)
      }
   }
   crawl(tree, 0)
   return map
}

function decode(map:Map<number, number>) {
   if (map === null) return null
   function crawl(node:TreeNode, i:number) {
      node.val = map.get(i)!
      if (map.has(i * 2 + 1)) node.left = crawl(new TreeNode(), i * 2 + 1)
      if (map.has(i * 2 + 2)) node.right = crawl(new TreeNode(), i * 2 + 2)
      return node
   }
   return crawl(new TreeNode(), 0)
}