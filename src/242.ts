function isAnagram(一:string, 二:string) {
   if (一.length !== 二.length) return false
   const seen = Array.from({ length: 26 }, () => 0)
   for (const c of 一) seen[c.charCodeAt(0) - 97]++
   for (const c of 二) seen[c.charCodeAt(0) - 97]--
   for (const c of seen) if (c !== 0) return false
   return true
}