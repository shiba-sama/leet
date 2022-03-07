/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Commentary

   - singly linked list
   - shift and unshift are O(1) from head of list
   - push and pop are O(n) from end of list
*/

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Type

type 森 = {
   root: 木 | undefined // undefined if 0
   size: number
}

type 木 = {
   value: any
   next: 木 | undefined // undefined if last
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Utility

const none = Symbol("none")

function dict(obj?: Object)
function dict(obj) { return Object.assign(Object.create(null), obj) }

function newList(...args): [木, 木]
function newList(...args) {
   const root = Node(args[0])
   let last = root
   for (const arg of args.slice(1)) 
      last.next = Node(arg, last), 
      last = last.next
   return [root, last]
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Atoms

function Node(value?, next?:木): 木
function Node(value=none, next) { return dict({ value, next, }) }

function List(): 森
function List(): 森 { return dict({ root: undefined, size: 0, }) }

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Methods

function shift(L:森) {
   if (L.size === 0) return undefined
   const root = L.root
   L.root = root?.next // undefined if last
   L.size--
   return root?.value
}

function unshift(L:森, value) {
   L.root = Node(value, L.root)
   return L.size++
}
