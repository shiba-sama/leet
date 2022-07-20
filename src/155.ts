// —————————————————————————————————————————————————————————————————————————————
// Solve

class MinStack {
   stack:number[] = []
   min = Infinity

   push(x:number) {
      this.stack.push(x)
      this.min = Math.min(this.min, x)
   }

   pop() {
      const x = this.stack.pop()
      if (x === this.min) {
         this.min = this.stack.reduce((a, b) => Math.min(a, b), Infinity)
      }
      return x
   }

   top() { return this.stack.at(-1) }
   getMin() { return this.min }
}