const sqrt5 = Math.sqrt(5)

function climbStairs(n: number): number {
   const fib = Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1)
   return Math.round(fib / sqrt5)
}

function climbStairs1(n: number): number {
   if (n === 1) return 1
   if (n === 2) return 2
   let a = 1
   let b = 2
   let c = 0
   for (let i = 3; i <= n; i++) {
     c = a + b
     a = b
     b = c
   }
   return c
 }