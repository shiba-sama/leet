// —————————————————————————————————————————————————————————————————————————————
// Solve

class MinStack {
   品:number[] = []
   小 = Infinity

   push(口:number) {
      this.品.push(口)
      this.小 = Math.min(this.小, 口)
   }

   pop() {
      const 口 = this.品.pop()
      if (口 === this.小) 
         this.小 = this.品.reduce((a, b) => Math.min(a, b), Infinity)
      return 口
   }

   top() { return this.品.at(-1) }
   getMin() { return this.小 }
}