// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Atoms

class Node {
   val:number = 0
   neighbors:Node[] = []
   constructor(val:number, neighbors?:Node[]) {
      Object.assign(this, {val, neighbors})
   }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Core

function cloneGraph(node:Node | null): Node | null {
   function clone(node: Node): Node {
      if (seen.has(node.val)) return seen.get(node.val)
      const copy = new Node(node.val)
      seen.set(node.val, copy)
      copy.neighbors = node.neighbors.map(clone)
      return copy
   }
   const seen = new Map()
   return node && clone(node)
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Extra

function clone(node: Node): Node | null {
   if (!node) return null;
   const map = new Map()
   const stack = [node]
   map.set(node.val, new Node(node.val))

   while (stack.length) {
      const n0 = stack.pop()
      if (!n0?.neighbors || n0.neighbors.length <= 0) continue;
      for (const peer0 of n0.neighbors) {
         const copy = map.get(peer0.val)
         if (map.has(peer0.val)) copy.neighbors.push(map.get(peer0.val))
         else {
            const peer1 = new Node(peer0.val)
            stack.push(peer0)
            copy.neighbors.push(peer1)
            map.set(peer0.val, peer1)
         }
      }
   }

   return map.get(node.val)
}