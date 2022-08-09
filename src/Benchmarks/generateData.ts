import { shuffledNats, randomInts } from "./benchmark.ts"

// Deno.writeTextFileSync(
//    "./data/nats.json", 
//    JSON.stringify(shuffledNats(10000)),
// )

Deno.writeTextFileSync(
   "./data/randomInts.json",
   JSON.stringify(randomInts(-10_000, 10_000, 10_000)),
)