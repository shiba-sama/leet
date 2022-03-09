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

function dict(obj?: Object): Object
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
function List() { return dict({ root: undefined, size: 0, }) }

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Methods

function pop(L:森) {
   if (L.size === 0) return undefined
   const root = L.root
   L.root = root?.next // undefined if last
   L.size--
   return root?.value
}

function push(L:森, value) {
   L.root = Node(value, L.root)
   return ++L.size
}

function get(L:森, i:number) {
   let curr = L.root
   while (i-- >= 0) curr = curr?.next
   return curr?.value
}

let l = List()
push(l, 10)
push(l, 15)
push(l, 20)