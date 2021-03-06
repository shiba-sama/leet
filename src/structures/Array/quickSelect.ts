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

// —————————————————————————————————————————————————————————————————————————————
// Quick Select

const arr = [3,2,3,1,2,4,5,5,6]
const kth = 4
console.log(quickSelect(arr, kth))
