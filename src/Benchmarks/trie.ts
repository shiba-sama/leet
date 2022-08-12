import T0 from "../structures/Trie/anotherTrie.ts"
import T1 from "../structures/Trie/trieClass.ts"
import dictionary from "./data/dictionary.json" assert { type: "json" }

Deno.bench(
   "anotherTrie",
   () => {
      const t = new T0()
      for (const word of dictionary) t.add(word)
   }
)

Deno.bench(
   "trieClass",
   () => {
      const t = new T1()
      for (const word of dictionary) t.add(word)
   }
)

