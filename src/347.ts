function topKFrequent0(nats:number[], k:number) {
   const seen = new Map<number, number>();
   for (const n of nats) {
      seen.set(n, (seen.get(n) || 0) + 1);
   }
   return [...seen.entries()]
      .sort(([a, b], [c, d]) => d - b)
      .slice(0, k)
      .map(([k, v]) => k);
}

function topKFrequent1(nats:number[], k:number) {
   const seen = new Map<number, number>()
   for (const n of nats) seen.set(n, (seen.get(n) || 0) + 1)
   const tops = Array.from({ length: k }, () => 0)
   for (const [k, v] of seen) {

   }
}