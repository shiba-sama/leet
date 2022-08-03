// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Levenshtein Distance


function minDistance(一:string, 二:string): number {
   if (!一.length) return 二.length
   if (!二.length) return 一.length
   if (一.length > 二.length) [一, 二] = [二, 一]

   const row = Array.from({ length: 一.length + 1 }, (_, i) => i)
   let n = 0

   for (let i=1; i<=二.length; i++) {
      let prev = i
      for (let j=1; j<=一.length; j++) {
         if (二[i - 1] === 一[j - 1]) n = row[j - 1]
         else n = Math.min(row[j - 1] + 1, Math.min(prev + 1, row[j] + 1))
         row[j - 1] = prev
         prev = n
      }
      row[一.length] = prev
   }

   return row[一.length]
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Test

const str1 = "dinitrophenylhydrazine"
const str2 = "acetylphenylhydrazine"

console.log(
   minDistance(str1, str2)
)
