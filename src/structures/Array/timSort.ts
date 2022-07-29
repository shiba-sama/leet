// —————————————————————————————————————————————————————————————————————————————
// Environment

const MIN_RUN = 32

function minRun(n) {
   let r = 0
   while (n >= MIN_RUN) r |= n & 1, n >>= 1
   return n + r
}

function insertionSort(品:number[], 小:number, 大:number) {
   for (let i = 小 + 1; i <= 大; i++) {
      const ith = 品[i]
      let j = i - 1
      while (j >= 小 && 品[j] > ith) 品[j + 1] = 品[j], j--
      品[j + 1] = ith
   }
}

function merge(品:number[], 小:number, 中:number, 大:number) {
   const arr_length1 = 中 - 小 + 1
   const arr_length2 = 大 - 中
   const 品小:number[] = []
   const 品大:number[] = []
   for (let i = 0; i < arr_length1; i++) 品小.push(品[小 + i])
   for (let i = 0; i < arr_length2; i++) 品大.push(品[中 + i + 1])

   let i = 0
   let j = 0
   let k = 小

   while (i < arr_length1 && j < arr_length2) {
      if (品小[i] <= 品大[j]) 品[k] = 品小[i], i++
      else 品[k] = 品大[j], j++
      k++
   }

   while (i < arr_length1) 品[k] = 品小[i], i++, k++
   while (j < arr_length2) 品[k] = 品大[j], j++, k++
}

// —————————————————————————————————————————————————————————————————————————————
// Tim Sort

function timSort(品:number[]) {
   const n = 品.length
   const minrun = minRun(n)

   for (let start = 0; start < n; start += minrun)
      insertionSort(品, start, Math.min(start + minrun - 1, n - 1))

   let run = minrun
   while (run < n) {
      for (let 小 = 0; 小 < n; 小 += 2 * run) {
         const 中 = Math.min(n - 1, 小 + run - 1)
         const 大 = Math.min((小 + 2 * run - 1), (n - 1))
         merge(品, 小, 中, 大)
      }
      run *= 2
   }

   return 品
}

// —————————————————————————————————————————————————————————————————————————————
// Test

let arr = [10, 0, 1, 9, 2, 8, 3, 7, 4, 6, 5]

console.log(
   timSort(arr)
)