// —————————————————————————————————————————————————————————————————————————————
// Trie

interface Node {
   isWord: boolean
}

function newNode() {
   const obj = Object.create(null)
   obj.isWord = false
   Object.defineProperty(obj, "isWord", {
      enumerable: false,
   })
   return obj as Node
}

class Trie {
   root = newNode()

   insert(word:string) {
      let curr = this.root
      for (const w of word) {
         curr[w] ??= newNode()
         curr = curr[w]
      }
      curr.isWord = true
   }

   search(word:string) {
      let curr = this.root
      for (const w of word) curr = curr?.[w]
      return Boolean(curr) && curr.isWord
   }

   startsWith(prefix:string) {
      let curr = this.root
      for (const p of prefix) curr = curr?.[p]
      return curr !== undefined
   }
}

export default {}