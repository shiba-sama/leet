// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Types

export default {

}

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

function dict<T extends Object>(obj?: T): T {
   return Object.assign(Object.create(null), obj)
}

function isLetter(letter: any): boolean {
   return typeof letter === 'string' && !!letter.match(/^[a-z]$/i)
}

function isWord(word: string): boolean {
   return !!word.match(/^[a-z]+$/i)
}

function followPath(T: Trie, word:string): Node | Trie {
   let curr = T.kids[word[0]]
   let next;

   // word is not in the trie
   if (!curr) return T

   for (const letter of word.slice(1)) {
      next = curr.kids[letter]
      if (!next) return curr
      curr = next
   }

   return curr
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
   if (!word.toLocaleLowerCase().match(/^[a-z]+$/i)) throw Error(`${word} isn't a word.`)
   return word.length === 1
      ? dict({ value: word[0], kids: dict(), isWord: true, })
      : dict({
         value: word[0],
         kids: dict({ [word[1]]: branch(word.slice(1)) }),
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

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Test

let t = branch('abcd')
