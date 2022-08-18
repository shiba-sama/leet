// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Levenshtein Distance

function levenshtein(w1:string, w2:string): number {
   if (!w1.length) return w2.length
   if (!w2.length) return w1.length
   if (w1.length > w2.length) [w1, w2] = [w2, w1]

   const row = Array.from({ length: w1.length + 1 }, (_, i) => i)
   let n = 0

   for (let i = 1; i <= w2.length; i++) {
      let prev = i
      for (let j = 1; j <= w1.length; j++) {
         if (w2[i - 1] === w1[j - 1]) n = row[j - 1]
         else n = Math.min(row[j - 1] + 1, Math.min(prev + 1, row[j] + 1))
         row[j - 1] = prev
         prev = n
      }
      row[w1.length] = prev
   }

   return row[w1.length]
}

function minDistance(w1:string, w2:string): number {
   if (w1.length === 0) return w2.length
   if (w2.length === 0) return w1.length
   const t1 = w1.slice(1)
   const t2 = w2.slice(1)
   if (w1[0] === w2[0]) return minDistance(t1, t2)
   return 1 + Math.min(
      minDistance(t1, w2),
      minDistance(w1, t2),
      minDistance(t1, t2)
   )
}