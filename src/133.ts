// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Types

interface Node {
   val: number
   neighbors: Node[]
   constructor(val?:number, neighbors?:Node[]): Node
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

export function cloneGraph(node: Node): Node | null {
   if (!node) return null;
   const map = new Map()

   const stack = [node]
   map.set(node.val, new Node(node.val, []))

   while (stack.length) {
      const old = stack.pop()
      if (!old?.neighbors || old.neighbors.length <= 0) continue;
      for (const oldPeer of old.neighbors) {
         const copy = map.get(oldPeer.val)
         if (map.has(oldPeer.val)) copy.neighbors.push(map.get(oldPeer.val)) 
         else {
            const newPeer = new Node(oldPeer.val, [])
            stack.push(oldPeer)
            copy.neighbors.push(newPeer)
            map.set(oldPeer.val, newPeer)
         }
      }
   }

   return map.get(node.val)
}

export let n = new Node(1, [new Node(2, [new Node(3, [])])])
export let n1 = cloneGraph(n)

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Export

export default {
   cloneGraph,
   n,
   n1,
}