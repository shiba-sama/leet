// —————————————————————————————————————————————————————————————————————————————
// Environment

interface Node {
   isWord: boolean
}

function Node(): Node {
   const obj = Object.create(null)
   obj.isWord = false
   return Object.defineProperty(obj, "isWord", { enumerable: false, })
}

// —————————————————————————————————————————————————————————————————————————————
// Trie

export default class Trie {
   root = Node()

   add(word:string) {
      let curr = this.root
      for (const w of word) {
         curr[w] ??= Node()
         curr = curr[w]
      }
      curr.isWord = true
   }

   hasWord(word:string) {
      let curr = this.root
      for (const w of word) curr = curr?.[w]
      return curr !== undefined && curr.isWord
   }

   hasPrefix(prefix:string) {
      let curr = this.root
      for (const p of prefix) curr = curr?.[p]
      return curr !== undefined
   }

   getPrefixes(prefix:string) {
      const matches:string[] = []

      let curr = this.root
      for (const p of prefix) curr = curr?.[p]

      ;+function traverse(node:Node, path:string) {
         if (node.isWord) matches.push(path)
         for (const letter in node) traverse(node[letter], path + letter)
      }(curr, prefix)

      return matches
   }
}

// —————————————————————————————————————————————————————————————————————————————
// Test

// const t = new Trie()
// t.add("hello")
// t.add("hello")
// t.add("hello")
// t.add("hell")
// t.add("he")
// t.add("helio")
// t.add("helium")

// console.log(
//    t.getPrefixes("hel")
// )
