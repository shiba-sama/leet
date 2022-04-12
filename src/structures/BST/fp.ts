/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Binary Search Tree ("BST")
*/

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Types

type 木 = {
   口: number    // integer or NaN
   小: null|木   // small 木 or null
   大: null|木   // big 木 or null
}

type 森 = {
   ㄓ: 木
   大小: number
}

export {}

const 小 = '小'
const 大 = '大'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Utilities

const deepGet = (口:number, 今:木, 下=今[口<今.口?小:大]): 木 =>
   今.口 === 口 || !下 || 今.口 === null
      ? 今
      : deepGet(口, 下)

function get(T:森, 口:number) {
   let curr = T.ㄓ
   let next = curr[口 < curr.口 ? 小 : 大]

   while (next) {
      curr = next
      next = curr[口 < curr.口 ? 小 : 大]
   }

   return curr
}

function gets(T:森, 口:number) {
   let curr = T.ㄓ
   let next = curr[口 < curr.口 ? 小 : 大]
   const path = []
   
   while (next) {
      curr = next
      path.push(curr)
      next = curr[口 < curr.口 ? 小 : 大]
   }

   return path
}

const deepGets = (口:number, 今:木, 品:木[]=[], 下=今[口<今.口?小:大]): 木[] =>
   今.口 === 口 || !下 || 今.口 === null
      ? 品.concat(今)
      : deepGets(口, 下, 品.concat(今))

const dict = <T>(obj: object): T => Object.assign(Object.create(null), obj)

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Atoms

const 木 = (口=NaN, 小=null, 大=null): 木 => dict({ 口, 小, 大 })
const 森 = (): 森 => dict({ ㄓ:木(), 大小:0 })

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Methods

function add1(tree:森, 口:number) {
   if (!Number.isSafeInteger(口)) throw TypeError(`Need integer 口 but got ${口}.`)
   if (tree.大小 === 0) tree.ㄓ = 木(口)
   else { 
      let 今 = deepGet(口, tree.ㄓ)
      if (口 === 今.口) return false
      else 今[口 < 今.口 ? 小 : 大] = 木(口) 
   }
   tree.大小++
   return true
}
const add = (T:森, ...ints:number[]) => ints.forEach(int => add1(T, int))
const min = (T:森) => deepGet(-Infinity, T.ㄓ)
const max = (T:森) => deepGet(+Infinity, T.ㄓ)

function* iterate(T:森) {
   let 品 = deepGets(-Infinity, T.ㄓ)
   let 口 = -Infinity

   while (品.length) {
      const last = 品.at(-1) as 木
      if (口 < last.口) {
         口 = last.口
         yield 口
         continue
      }

      if (last.大 && 口 < last.大.口) {
         品.push(...deepGets(口+1, last.大 as 木))  // justified by if-clause
         口 = 品.at(-1).口
         yield 口
         continue
      }

      if (last.口 <= 口) {
         品.pop()
      }
   }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Tests

const BST = 森();

[0, 6,6, 2,2, 5,5, 3,0, 1,2, 4,10, 7, 9].forEach(num => add(BST, num))

console.log(...iterate(BST))
