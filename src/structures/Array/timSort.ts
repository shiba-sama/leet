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

function merge(品:number[], l:number, m:number, r:number) {
   const arr_length1 = m - l + 1
   const arr_length2 = r - m
   const left:number[] = []
   const right:number[] = []
   for (let i = 0; i < arr_length1; i++) left.push(品[l + i])
   for (let i = 0; i < arr_length2; i++) right.push(品[m + i + 1])

   let i = 0
   let j = 0
   let k = l

   while (i < arr_length1 && j < arr_length2) {
      if (left[i] <= right[j]) 品[k] = left[i], i++
      else 品[k] = right[j], j++
      k++
   }

   while (i < arr_length1) 品[k] = left[i], i++, k++
   while (j < arr_length2) 品[k] = right[j], j++, k++
}

// —————————————————————————————————————————————————————————————————————————————
// Tim Sort

function timSort(品:number[]) {
   const n = 品.length
   const minrun = minRun(n)

   for (let start = 0; start < n; start += minrun)
      insertionSort(品, start, Math.min(start + minrun - 1, n - 1))

   let size = minrun
   while (size < n) {
      for (let left = 0; left < n; left += 2 * size) {
         const mid = Math.min(n - 1, left + size - 1)
         const right = Math.min((left + 2 * size - 1), (n - 1))
         merge(品, left, mid, right)
      }
      size = 2 * size
   }

   return 品
}

// —————————————————————————————————————————————————————————————————————————————
// Test

let arr = [10, 0, 1, 9, 2, 8, 3, 7, 4, 6, 5]

console.log(
   timSort(arr)
)