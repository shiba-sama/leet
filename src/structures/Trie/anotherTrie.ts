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

   has(word:string) {
      let curr = this.root
      for (const letter of word) {
         if (!(letter in curr)) return false
         curr = curr[letter]
      }
      return curr.isWord
   }

   hasPrefix(prefix:string) {
      let curr = this.root
      for (const letter of prefix) {
         if (!(letter in curr)) return false
         curr = curr[letter]
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

      function traverse(node:Node, path:string) {
         if (node.isWord) matches.push(path)
         for (const letter in node) traverse(node[letter], path + letter)
      }
      traverse(curr, prefix)

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