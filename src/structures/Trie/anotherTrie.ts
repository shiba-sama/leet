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
      for (const w of word) {
         curr[w] ??= new Node()
         curr = curr[w]
      }
      curr.isWord = true
   }

   has(word:string) {
      let curr = this.root
      for (const w of word) {
         if (!(w in curr)) return false
         curr = curr[w]
      }
      return curr.isWord
   }

   hasPrefix(prefix:string) {
      let curr = this.root
      for (const p of prefix) {
         if (!(p in curr)) return false
         curr = curr[p]
      }
      return true
   }

   getPrefixes(prefix:string) {
      const matches:string[] = []

      let curr = this.root
      for (const p of prefix) {
         if (!(p in curr)) return matches
         curr = curr[p]
      }

      +function traverse(node:Node, path:string) {
         if (node.isWord) matches.push(path)
         for (const letter in node) traverse(node[letter], path + letter)
      }(curr, prefix)

      return matches
   }
}

// —————————————————————————————————————————————————————————————————————————————
// Test

const t = new Trie()
t.insert("hello")
t.insert("hello")
t.insert("hello")
t.insert("hell")
t.insert("he")
t.insert("helio")
t.insert("helium")

// —————————————————————————————————————————————————————————————————————————————
// Export

export default Trie