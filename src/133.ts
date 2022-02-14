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
   constructor(val:number, neighbors?:Node[]) {
      Object.assign(this, {val, neighbors})
   }

   // print(): string {
   //     return this.print2(new Set(), 0);
   // }

   // #print2(cache: Set<number>, pad: number): string {
   //     const padding = Array(pad).fill(".").join("");
   //     if (cache.has(this.value)) {
   //         return `${padding}Nod(${this.value}) [SEEN]\n`
   //     } else {
   //         cache.add(this.value);
   //         return `${padding}Nod(${this.value}):\n${this.neighbors.map(n => n.print2(cache, pad + 4)).join("")}`
   //     }
   // }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Core

function cloneGraph(node:Node | null): Node | null {
   if (!node) return null;
   function crawl(node: Node): Node {
      if (seen.has(node.val)) return seen.get(node.val)
      const copy = new Node(node.val)
      seen.set(node.val, copy)
      copy.neighbors = node.neighbors.map(crawl)
      return copy
   }
   const seen = new Map()
   return crawl(node);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Extra

function clone(node: Node): Node | null {
   if (!node) return null;
   const map = new Map()
   const stack = [node]
   map.set(node.val, new Node(node.val))

   while (stack.length) {
      const old = stack.pop()
      if (!old?.neighbors || old.neighbors.length <= 0) continue;
      for (const oldPeer of old.neighbors) {
         const copy = map.get(oldPeer.val)
         if (map.has(oldPeer.val)) copy.neighbors.push(map.get(oldPeer.val)) 
         else {
            const newPeer = new Node(oldPeer.val)
            stack.push(oldPeer)
            copy.neighbors.push(newPeer)
            map.set(oldPeer.val, newPeer)
         }
      }
   }

   return map.get(node.val)
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Export

export default {
   cloneGraph
}
