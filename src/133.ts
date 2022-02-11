// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Types

interface Node {
   val: number
   neighbors: Node[]
   constructor(val:number, neighbors:Node[]): Node
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Atoms

class Node {
   val:number = 0;
   neighbors:Node[] = [];
   constructor(val:number, neighbors:Node[]) {
      Object.assign(this, {val, neighbors})
   }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Graph Cloning

function cloneGraph(node: Node) {
   let seen = new Set()
   let clone = Object.create(null)
   function walk(node: Node) {
      const { val, neighbors } = node
      for (let neighbor of neighbors) {
         if (!seen.has(neighbor)) {
            seen.add(neighbor)
            walk(neighbor)
         }
      }
   }
   return walk(node)
}

let n = Node(1, [])