// —————————————————————————————————————————————————————————————————————————————
// Environment

const letter = new Set([
   "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
   "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
   "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
   "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
   "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
])

// —————————————————————————————————————————————————————————————————————————————
// Solve

function isPalindrome1(str:string) {
   const clean = str.replace(/[^a-z0-9]/gi, "").toLowerCase()
   return clean === clean.split("").reverse().join("")
}

function isPalindrome2(str:string) {
   let forward = 0
   let backward = str.length - 1
   while (forward < backward) {
      const l1 = str[forward].toLocaleLowerCase()
      const l2 = str[backward].toLocaleLowerCase()
      if (!letter.has(l1)) forward++
      else if (!letter.has(l2)) backward--
      else if (l1 !== l2) return false
      else forward++, backward--
   }
   return true
}
