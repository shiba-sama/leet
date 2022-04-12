/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Linked List
     - double
     - circular

   Methods
      - push (enqueue)
      - shift (dequeue)
*/

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Types

type Node = {
   value: any
   prev: Node
   next: Node
}

type List = {
   first: Node
   size: number
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Utility

/**
 * Creates a null prototype version of an object for dev ergonomics.
 */
function dict<T>(obj: T): T {
   return Object.assign(Object.create(null), obj)
}

/**
 * Indicates an empty value in a linked list.
 */
const none = Symbol('none')

function single(value:any = none): Node {
   let n = Node(value)
   return Object.assign(n, { prev: n, next: n })
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Linked List #double #circular

/**
 * Linked List
 */
function List(): List {
   return dict({ first: single(), size:0, })
}

/**
 * Node of Linked List
 */
function Node(value:any, prev?:Node, next?:Node): Node
function Node(value, prev, next) {
   return dict({ value, prev, next, })
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Methods

/**
 * Pushes a value `value` onto the end of the list `L`.
 */
function push(L:List, value) {
   if (L.size === 0) {
      L.first.value = value;
      return ++L.size
   }

   const last = Node(value)          // new "last" node
   const penultimate = L.first.prev  // old "last" node

   L.first.prev = last
   penultimate.next = last
   last.prev = penultimate
   last.next = L.first
   return ++L.size
}

function pop(L:List) {
   const value = L.first.value
   const penultimate = L.first.prev.prev

   if (L.size === 0) return undefined
   if (L.size === 1) {
      L.first.value = none
      L.size = 0
      return value
   }

   penultimate.next = L.first
   L.first.prev = penultimate
   L.size--
   return value
}

function unshift(L:List, value) {
   if (L.size === 0) {
      L.first.value = value
      return ++L.size
   }

   const first = Node(value, L.first.prev, L.first)
   const second = L.first
   const last = L.first.prev

   last.next = first
   first.next = second
   first.prev = last
   second.prev = first

   L.first = first
   return ++L.size
}

/**
 * Shifts the value off the front of the list `L`.
 */
function shift(L:List) {
   if (L.size === 0) return undefined

   const first = L.first.value
   const second = L.first.next
   const last = L.first.prev

   if (L.size === 1) {
      L.first.value = none
      L.size = 0
      return first
   }

   last.next = second
   second.prev = last
   L.first = second
   L.size--

   return first
}

let l = List()
