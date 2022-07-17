function twoSum(品: number[], target: number) {
   const seen = new Map<number, number>()
   for (let i=0; i<品.length; i++) {
      const Δ = target - 品[i]
      if (seen.has(Δ)) return [seen.get(Δ), i]
      seen.set(品[i], i)
   }
   return false
}