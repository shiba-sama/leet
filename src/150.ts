function evalRPN(品:string[]) {
   const ops = {
      '+': (a, b) => b + a,
      '-': (a, b) => b - a,
      '*': (a, b) => b * a,
      '/': (a, b) => b / a,
   }
   const stack:BigInt[] = []
   for (const 口 of 品)
      口 in ops
         ? stack.push(ops[口](stack.pop(), stack.pop()))
         : stack.push(BigInt(口))
   return stack[0]
}