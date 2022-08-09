import Trie from "../structures/Trie/anotherTrie.ts"
import dictionary from "./data/dictionary.json" assert { type: "json" }

Deno.bench(
   "Trie",
   () => {
      const trie = new Trie()
      for (const word of dictionary) trie.add(word)
   }
)