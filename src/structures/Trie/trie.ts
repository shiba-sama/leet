// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Types

interface Trie {
   root: Map<string, Node>
}

interface Node {
   value: number | null
   kids: Map<string, Node>
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Utility

function dict(obj?:object) {
   return Object.assign(Object.create(null), obj)
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Atoms

function END() {
   return dict({ end: true })
}

// creates a sub-trie to stitch onto another node
function branch(word:string): Node
function branch(word) {
   return word.length === 0
      ? END()
      : dict({ [word[0]]: word.length < 2 ? END() : branch(word.slice(1)) })
}

function Trie(): Trie
function Trie() {
   return {
      root: dict(),
   }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Methods

function insert(Trie:Trie, word:string): Trie
function insert(Trie:Trie, word:string): Trie {
   Trie.root.has
   
   return Trie
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Test

export default {
   
}