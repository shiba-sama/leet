// —————————————————————————————————————————————————————————————————————————————
// Daily Temperatures

function dailyTemperatures(temps: number[]): number[] {
   const 品 = Array.from({ length: temps.length }, () => 0)
   const stack: number[] = []
   for (let i=0; i<temps.length; i++) {
      while (stack.length !== 0 && temps[stack[stack.length - 1]] < temps[i]) {
         const j = stack.pop()!
         品[j] = i - j
      }
      stack.push(i)
   }
   return 品
}