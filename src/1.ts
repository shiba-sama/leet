function twoSum(nats: number[], target: number) {
   const seen = new Map<number, number>()
   for (let i=0; i<nats.length; i++) {
      const Δ = target - nats[i]
      if (seen.has(Δ)) return [seen.get(Δ), i]
      seen.set(nats[i], i)
   }
   return false
}