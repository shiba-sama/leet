// —————————————————————————————————————————————————————————————————————————————
// Environment

const letter = new Set([
   "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
   "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
   "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
   "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
   "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
])

function isAlphanumeric(letter:string) {
   const code = letter.charCodeAt(0)
   return (code > 47 && code < 58) // numeric (0-9)
      || (code > 64 && code < 91)  // upper alpha (A-Z)
      || (code > 96 && code < 123) // lower alpha (a-z)
}

// —————————————————————————————————————————————————————————————————————————————
// 

function isPalindrome0(str:string) {
   const clean = str.replace(/[^a-z0-9]/gi, "").toLowerCase()
   for (let i = 0; i < clean.length; i++)
      if (clean[i] !== clean[clean.length - i - 1]) return false
   return true
}

function isPalindrome1(str:string) {
   const clean = str.replace(/[^a-z0-9]/gi, "").toLowerCase()
   return clean === clean.split("").reverse().join("")
}

function isPalindrome2(str:string) {
   let next = 0
   let back = str.length - 1
   while (next < back) {
      const l1 = str[next].toLocaleLowerCase()
      const l2 = str[back].toLocaleLowerCase()
      if (!letter.has(l1)) next++
      else if (!letter.has(l2)) back--
      else if (l1 !== l2) return false
      else next++, back--
   }
   return true
}

function isPalindrome3(str:string) {
   let next = 0
   let back = str.length - 1
   while (next < back) {
      while (!letter.has(str[next]) && next < back) next++
      while (!letter.has(str[back]) && next < back) back--
      if (str[next].toLocaleLowerCase() !== str[back].toLocaleLowerCase()) 
         return false
      else next++, back--
   }
   return true
}