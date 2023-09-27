// —————————————————————————————————————————————————————————————————————————————
// Sum of Unique Elements

function sumOfUnique(nums:number[]) {
   const dict = new Map<number, number>()
   let sum = 0

   for (const n of nums) dict.set(n, dict.get(n) ?? 0 + 1)
   for (const [k, v] of dict) if (v === 1) sum += k

   return sum
}