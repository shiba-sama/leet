// —————————————————————————————————————————————————————————————————————————————
// Quick Select

function quickSelect<T>(arr:T[], k:number): T {
   const [中, ...品] = arr
   const 小 = 品.filter(口 => 口 < 中)
   const 大 = 品.filter(口 => 口 >= 中)

   if (小.length === k) return 中
   if (小.length > k) return quickSelect(小, k)
   return quickSelect(大, k - 小.length - 1)   
}

// —————————————————————————————————————————————————————————————————————————————
// Quick Select

const arr = [3,2,3,1,2,4,5,5,6]
const k = 4
console.log(quickSelect(arr, k))
