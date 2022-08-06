import { shuffledNats } from "./benchmark.ts"

Deno.writeTextFileSync(
   "./data/nats.json", 
   JSON.stringify(shuffledNats(10000)),
)