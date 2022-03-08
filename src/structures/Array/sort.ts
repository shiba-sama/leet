const qs = arr => arr.length < 2
   ? arr
   : qs(arr.slice(1).filter(x => x <= arr[0]))
      .concat(arr[0])
      .concat(qs(arr.slice(1).filter(x => arr[0] < x)))

function sort(arr: number[]): number[] {
   if (arr.length < 2) return arr
   const [pivot, ...rest] = arr
   const small = rest.filter(x => x <= pivot)
   const big = rest.filter(x => pivot < x)
   return sort(small).concat(pivot).concat(sort(big))
}
