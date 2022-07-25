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
      if (口 === this.口) return
      const next = 口 < this.口 ? '小' : '大'
      if (this[next] === undefined) this[next] = new Node(口)
      else this[next]!.add(口)
   }

   has(口:number): boolean {
      return 口 === this.口 
         || !!this[口 < this.口 ? '小' : '大']?.has(口)
   }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Test

let t = new Node(0)
t.add(-10)
t.add(-10)
t.add(10)
t.add(10)
t.add(0)
t.add(-20)
t.add(20)
t.add(10)
t.add(-1)

console.log(
   [-20, -10, -1, 0, 10, 20].every(n => t.has(n))
)