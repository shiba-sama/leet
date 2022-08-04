// —————————————————————————————————————————————————————————————————————————————
// Environment

class TreeNode {
   val: number
   left: TreeNode | null
   right: TreeNode | null
   constructor(val?:number, left?:Tree, right?:Tree) {
      this.val = (val === undefined ? 0 : val)
      this.left = (left === undefined ? null : left)
      this.right = (right === undefined ? null : right)
   }
}

type Tree = TreeNode | null

// —————————————————————————————————————————————————————————————————————————————
// Serial + Deserialize a Binary Tree

function serialize(tree:Tree) {
   const 品 = [] as (number|string)[]
   function crawl(node:Tree) {
      if (node === null) return 品.push("#")
      品.push(node.val)
      crawl(node.left)
      crawl(node.right)
   }
   crawl(tree)
   return JSON.stringify(品)
}

function deserialize(str:string) {
   const 品 = JSON.parse(str)
   function crawl(): Tree {
      const 口 = 品.shift()
      return 口 === "#"
         ? null
         : new TreeNode(Number(口), crawl(), crawl())
   }
   return crawl()
}

// —————————————————————————————————————————————————————————————————————————————
// Test

//      0
//     / \
//    1   2
//   / \ / \
//  n  n 5  6
//      /  / \
//    nn  11  n

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

const check = (t:TreeNode) => serialize(t) === serialize(deserialize(serialize(t)))

console.log(serialize(t0), check(t0))
console.log(serialize(t1), check(t1))

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