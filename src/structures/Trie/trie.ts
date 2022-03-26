// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Types

export default {

}

interface Trie {
   kids: { [key: string]: Node }
   words: number
}

interface Node {
   value: string
   kids: {[key: string]: Node}
   isWord: boolean
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Utility

function dict<T extends Object>(obj?: T): T
function dict(obj?: object) {
   return Object.assign(Object.create(null), obj)
}

function isLetter(letter: any): boolean {
   return typeof letter === 'string' && !!letter.match(/^[a-z]$/i)
}

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
   const w = word.toLocaleLowerCase()
   if (!w.match(/^[a-z]+$/i)) throw Error("Word must be a string of letters")
   return word.length === 1
      ? dict({
         value: word[0],
         kids: dict(),
         isWord: true,
      })
      : dict({
         value: word[0],
         kids: dict({ [word[0]]: branch(word.slice(1)) }),
         isWord: false,
      })
}

function Trie(): Trie {
   return dict({
      kids: dict(),
      words: 0,
   })
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Methods

function hasWord(T: Trie, word:string): boolean {
   let curr = T.root
   for (const letter of word) {
      if (letter in curr.kids) curr = curr.kids[letter]
      else return false
   }
   return Boolean(curr.isWord)
}

function insert(Trie:Trie, word:string): boolean {

}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Test

let t = branch('abcd')
