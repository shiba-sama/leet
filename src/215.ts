// —————————————————————————————————————————————————————————————————————————————
// Environment

function shuffleArray<T>(arr: T[]) {
   const copy = arr.slice();
   for (let i = copy.length - 1; 0 < i; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
   }
   return copy
}

function quickSelect<T>(arr:T[], kth:number): T {
   const [中, ...品] = arr
   const 小 = 品.filter(口 => 口 < 中)
   const 大 = 品.filter(口 => 口 >= 中)

   if (小.length === kth) return 中
   if (小.length > kth) return quickSelect(小, kth)
   return quickSelect(大, kth - 小.length - 1)   
}

// —————————————————————————————————————————————————————————————————————————————
// Kth Largest Element in Array

function findKthLargest(nums: number[], k: number): number {
   return quickSelect(shuffleArray(nums), nums.length - k)
}