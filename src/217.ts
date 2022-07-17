function containsDuplicate(nats: number[]) {
   const seen = new Set<number>()
   for (const n of nats) {
      if (seen.has(n)) return true
      seen.add(n)
   }
   return false
}