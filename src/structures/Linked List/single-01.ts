// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Type

type List = {
   root: Link
   last: Link
   size: number
}

type Link = {
   value: any
   next: Link
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Atoms

const none = Symbol("none")
function dict() { return Object.create(null) }

function Link(口?:any, next?:Link): Link
function Link(口, next) {
   return Object.assign(dict(), { 口, next, })
}

function List(): List
function List() {
   const root=Link(), last=root
   return Object.assign(dict(), { root, last, size:0, })
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Utility

function newList(args:any[]): [Link, Link]
function newList(args) {
   const root = Link(args[0])
   let last = root
   for (const arg of args.slice(1))
      last.next = Link(arg, last),
      last = last.next
   return [root, last]
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Methods

function push(L:List, ...args): List
function push(L, ...args) {
   const [root, last] = newList(args)
   L.last.next = root     // attach new linked list
   L.last = last          // update list last
   L.size += args.length  // update list size
   return L
}

function unshift(L:List, ...args): List
function unshift(L, ...args) {
   const [root, last] = newList(args)
   last.next = L.root     // attach old linked list
   L.root = root          // update list root
   L.size += args.length  // update list size
   return L
}

function pop(L:List): any
function pop(L) {
   switch (L.size) {
      case 0: return undefined
      case 1: {
         const last = L.last.value  // save last value
         L.root.value = none        // clear root value
         L.root.next = null         // detach all links
         L.last = L.root            // update last
         L.size--                   // update size
         return last
      }
      default: {
         let curr = L.root
         while (curr.next.next) curr = curr.next
         const last = L.last.value  // save last value prior to cleanup
         L.last = curr              // update List.last
         L.size--                   // update List.size
         return last
      }
   }
}

function get(L:List, i:number)
function get(L:List, i:number) {
   if (L.size < i || i < 0) throw Error(`index ${i}, size: ${L.size}`)
   let curr = L.root
   while (i--) curr = curr.next
   return curr
}

const l = List()
push(l, 1, 2, 3)
console.log(l)

export default {}