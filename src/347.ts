// —————————————————————————————————————————————————————————————————————————————
// Top K Frequent Elements

function topKFrequent(nats:number[], k:number) {
   const seen = new Map<number, number>();
   for (const n of nats) seen.set(n, (seen.get(n) ?? 0) + 1)
   return [...seen.entries()]
      .sort(([a, b], [c, d]) => d - b)
      .slice(0, k)
      .map(([k, ]) => k);
}