// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Types

interface Node {
   口: number
   小?: Node
   大?: Node
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Atoms

class Node {
   constructor(口:number) { this.口 = 口 }

   add(口:number) {
      if (口 === this.口) return false
      const next = 口 < this.口 ? '小' : '大'
      if (this[next] === undefined) this[next] = new Node(口)
      else this[next]!.add(口)
   }

   has(口:number): boolean {
      return 口 === this.口 || !!this[口 < this.口 ? '小' : '大']?.has(口)
   }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Test

let n = new Node(0)
n.add(-10)
n.add(-10)
n.add(10)
n.add(10)
n.add(0)
n.add(-20)
n.add(20)
n.add(10)