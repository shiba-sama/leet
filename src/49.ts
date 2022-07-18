// —————————————————————————————————————————————————————————————————————————————
// Environment

type Groups = {
   [key: string]: string[]
}

// —————————————————————————————————————————————————————————————————————————————
// Group Anagrams

function groupAnagrams(strings:string[]): string[][] {
   const seen:Groups = {}

   for (const str of strings) {
      const sorted = str.split("").sort().join("")
      sorted in seen
         ? seen[sorted].push(str)
         : seen[sorted] = [str]
   }

   return Object.values(seen)
}