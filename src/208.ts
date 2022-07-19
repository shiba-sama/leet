// —————————————————————————————————————————————————————————————————————————————
// Trie

class Node {
   isWord = false
   constructor() {
      Object.defineProperty(this, "isWord", {
         enumerable: false,
      })
   }
}

class Trie {
   root = new Node()

   insert(word:string) {
      let curr = this.root
      for (const letter of word) {
         curr[letter] ??= new Node()
         curr = curr[letter]
      }
      curr.isWord = true
   }

   search(word:string) {
      let curr = this.root
      for (const letter of word) {
         if (!(letter in curr)) return false
         curr = curr[letter]
      }
      return curr.isWord
   }

   startsWith(word:string) {
      let curr = this.root
      for (const letter of word) {
         if (!(letter in curr)) return false
         curr = curr[letter]
      }
      return true
   }
}

export default {}