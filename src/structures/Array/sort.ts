const quicksort = arr => arr.length < 2
   ? arr
   : quicksort(arr.slice(1).filter(x => x <= arr[0]))
      .concat(arr[0])
      .concat(quicksort(arr.slice(1).filter(x => arr[0] < x)))

function qs(arr: number[]): number[] {
   if (arr.length < 2) return arr
   const [pivot, ...rest] = arr
   const 小 = rest.filter(x => x <= pivot)
   const 大 = rest.filter(x => pivot < x)
   return qs(小).concat(pivot).concat(qs(大))
}
