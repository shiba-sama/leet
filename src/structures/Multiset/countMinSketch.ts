// —————————————————————————————————————————————————————————————————————————————
// Environment

function hash(word:string) {
   let hash = 0
   for (const letter of word) {
      hash += letter.charCodeAt(0)
      hash += hash << 10
      hash ^= hash >> 6
   }
   hash += hash << 3
   hash ^= hash >> 11
   hash += hash << 15
   return hash
}

function zeroMatrix(rows:number, cols:number) {
   return Array.from(
      { length: rows }, 
      () => Array.from(
         { length: cols }, 
         () => 0
      )
   )
}

export function randomInts(n:number, bits:8|16|32): Uint8Array | Uint16Array | Uint32Array
export function randomInts(n, bits=32) {
   switch(bits) {
      case 8: return window.crypto.getRandomValues(new Uint8Array(n))
      case 16: return window.crypto.getRandomValues(new Uint16Array(n))
      case 32: return window.crypto.getRandomValues(new Uint32Array(n))
      default: throw Error(`Unsupported number of bits: ${bits}`)
   }
}

// javascript implementation of mmh3 python library
function mmh3(str:string, seed:number=0) {
   let h = seed
   for (let i = 0; i < str.length; i++) {
      h = Math.imul(h ^ str.charCodeAt(i), 0x9e3779b9)
      h = h << 8 | h >>> 24
   }
   return h >>> 0
}

// —————————————————————————————————————————————————————————————————————————————
// Count Min Sketch

class CountMinSketch {
   cols:number
   rows:number
   seeds:number[]
   table:number[][]

   constructor(rows:number, cols:number, seeds:number[]) {
      this.cols = cols
      this.rows = rows
      this.seeds = seeds
      this.table = zeroMatrix(rows, cols)
   }

   increment(key:string) {
      for (let i=0; i<this.rows; i++) {

      }
   }
}