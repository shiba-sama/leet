package main

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Environment

func collatz(n int) int {
   if n % 2 == 0 {
      return n / 2
   } else {
      return 3 * n + 1
   }
}

func collatz_length(n int) int {
   count := 0
   for n != 1 {
      n = collatz(n)
      count++
   }
   return count
}

func main() {
   max_run  := 0
   max_seed := 0
   for i := 1; i < 1_000_000; i++ {
      if max_run < collatz_length(i) {
         max_run = collatz_length(i)
         max_seed = i
      }
   }
   println(max_run, max_seed)
}