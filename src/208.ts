// —————————————————————————————————————————————————————————————————————————————
// Trie

class Node {
   kids   = {}
   isWord = false
}

class Trie {
   root = new Node()

   insert(word:string) {
      let curr = this.root
      for (const letter of word) {
         if (!(letter in curr.kids)) curr.kids[letter] = new Node()
         curr = curr.kids[letter]
      }
      curr.isWord = true
   }

   search(word:string) {
      let curr = this.root
      for (const letter of word) {
         if (!(letter in curr.kids)) return false
         curr = curr.kids[letter]
      }
      return curr.isWord
   }

   startsWith(word:string) {
      let curr = this.root
      for (const letter of word) {
         if (!(letter in curr.kids)) return false
         curr = curr.kids[letter]
      }
      return true
   }
}