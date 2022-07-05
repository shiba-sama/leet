// —————————————————————————————————————————————————————————————————————————————
// Solution

function canJump(v:number[]) {
   let i = 0
   for (let d=0; i<v.length && i<=d; i++) 
      d = Math.max(d, i + v[i])
   return i === v.length
}

function canJump1(v:number[]) {
   let d = 0
   for (let i=0; i<v.length; i++) {
      if (i > d) return false
      d = Math.max(d, i + v[i])
   }
   return true
}