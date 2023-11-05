// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Types

type Trie = {
   kids: { [key: string]: Node }
   words: number
}

type Node = {
   value: string
   kids: {[key: string]: Node}
   isWord: boolean
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Utility

const dict = <T extends Object>(obj?: T): T => Object.assign(Object.create(null), obj)
const isLetter = (letter:string) => /^[a-z]$/i.test(letter)
const isWord = (word:string) => /^[a-z]+$/i.test(word)

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Atoms

function node({ value="", kids=dict(), isWord=false }): Node {
   return dict({
      value,
      kids,
      isWord,
   }) as Node
}

// creates a sub-trie to stitch onto another node
function branch(word:string): Node {
   return word.length === 1
      ? node({ value: word, isWord: true })
      : node({
         value: word[0],
         kids: dict({ [word[1]]: branch(word.slice(1)) }),
      })
}

function newTrie(word:string): Trie {
   const b = branch(word)
   return dict({
      kids: dict({ [b.value]: b }),
      words: 0,
   })
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Methods

function insert(T:Trie, word:string) {
   if (!isWord(word)) throw Error(`insert: invalid word: ${word}`)
   const [w, ...ord] = word
   let curr = T[word[0]]
   for (let i = 0; i < ord.length; i++) {
      const letter = ord[i]
      if (!curr.kids[letter]) {
         curr.kids[letter] = branch(word.slice(i + 1))
         return ++T.words
      }
      curr = curr.kids[letter]
   }
   if (curr.isWord) return T.words
   curr.isWord = true
   return ++T.words
}

function hasWord(T:Trie, word:string): boolean {
   if (!isWord(word)) return false

   const [w, ...ord] = word
   let curr = T.kids[w]

   for (const o of ord) {
      if (!curr) return false
      curr = curr.kids[o]
   }

   return !!curr.isWord
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Test

let b = branch('abcd')
let t = newTrie()

t.kids[1] = b
