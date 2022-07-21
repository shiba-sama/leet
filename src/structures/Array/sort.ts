// —————————————————————————————————————————————————————————————————————————————
// Quick Sort

function qs(nums:number[]): number[] {
   if (nums.length < 2) return nums
   const [中, ...品] = nums
   const 小 = 品.filter(口 => 口 <= 中)
   const 大 = 品.filter(口 => 中 < 口)
   return qs(小).concat(中).concat(qs(大))
}