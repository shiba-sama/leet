// —————————————————————————————————————————————————————————————————————————————
// Quick Select

function quickSelect<T>(arr:T[], kth:number): T {
   const [中, ...品] = arr
   const 小 = 品.filter(口 => 口 < 中)
   const 大 = 品.filter(口 => 口 >= 中)

   if (小.length === kth) return 中
   if (小.length > kth) return quickSelect(小, kth)
   return quickSelect(大, kth - 小.length - 1)   
}