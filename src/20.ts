// —————————————————————————————————————————————————————————————————————————————
// Valid Brackets

function isValid(parens:string) {
   if (parens.length % 2 !== 0) return false
   const pairs = { "(": ")", "[": "]", "{": "}" }
   const stack:string[] = []
   for (const p of parens) {
      if (p in pairs) stack.push(p)
      else if (pairs[stack.pop()!] !== p) return false
   }
   return stack.length === 0
}