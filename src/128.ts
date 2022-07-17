// —————————————————————————————————————————————————————————————————————————————
// Solve

function longestConsecutive(nums:number[]) {
   let best = 0
   let ints = new Set(nums)
   for (let int of ints) {
      let pos = int
      let neg = int
      while (ints.delete(pos + 1)) pos++
      while (ints.delete(neg - 1)) neg--
      const diff = pos - neg + 1
      if (best < diff) best = diff
   }
   return best
}

// —————————————————————————————————————————————————————————————————————————————
// Extra

function maxConsecutive(nums:number[]) {
   let best = 0
   let ints = new Set(nums)
   for (let int of ints) {
      if (ints.has(int - 1)) continue
      let curr = int
      let streak = 1
      while (ints.delete(curr + 1)) curr++, streak++
      if (best < streak) best = streak
   }
   return best
}