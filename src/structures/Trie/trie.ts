// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Types

export default {

}

type char = "" | "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k"
   | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x"
   | "y" | "z"

type Trie = {
   root: {[key: string]: any}
}

type Node = {
   value: char
   kids: {[key: string]: Node}
   isWord: boolean
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Utility

function dict<T extends Object>(obj?: T): T
function dict(obj?: object) {
   return Object.assign(Object.create(null), obj)
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
function branch(word:string): Node
function branch(word) {
   if (word.length === 0) throw Error('branch() received an empty string')
   return word.length === 1
      ? dict({ 
         value: word[0], 
         isWord: true, 
         kids: dict(), 
      })
      : dict({
         value: word[0],
         kids: {[word[1]]: branch(word.slice(1))},
      })
}

function Trie(): Trie {
   return dict({
      root: dict(),
      words: 0,
   })
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Methods

function hasWord(T: Trie, word:string): boolean
function hasWord(T, word) {
   let curr = T.root
   for (const letter of word) {
      if (letter in curr.kids) curr = curr.kids[letter]
      else return false
   }
   return Boolean(curr.isWord)
}

function insert(Trie:Trie, word:string): boolean
function insert(Trie:Trie, word:string) {
   let curr = Trie.root
   for (let i = 0; i < word.length; i++) {
      const letter = word[i]
      if (!(letter in curr.kids)) curr.kids[letter] = branch(word.slice(i))
      curr = curr.kids[letter]
   }
   if (curr.isWord) return false
   return curr.isWord = true
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Test

let t = Trie()
insert(t, 'abcd')
