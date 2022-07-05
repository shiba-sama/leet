// —————————————————————————————————————————————————————————————————————————————
// Solution

/**
 * i: index of vector <v>
 * j: jump distance
 */
function canJump(v:number[]) {
   let i = 0
   for (let j=0; i<v.length && i<=j; i++) j = Math.max(j, i + v[i])
   return i === v.length
}