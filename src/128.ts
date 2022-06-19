// —————————————————————————————————————————————————————————————————————————————
// Solve

function maxConsecutive(ints:number[]) {
   let max = 0
   let set = new Set(ints)
   for (let int of set) {
      let 大 = int
      let 小 = int
      while (set.delete(大 + 1)) 大++
      while (set.delete(小 - 1)) 小--
      const diff = 大 - 小 + 1
      if (max < diff) max = diff
   }
   return max
}