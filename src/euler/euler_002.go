package main

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Environment

const max = 4_000_000
const s0 = 2
const s1 = 8

func even_fibonacci(s0 int, s1 int) int {
	sum := 0
	for s0 < max {
		sum += s0
		s0, s1 = s1, s0 + s1 * 4
	}
	return sum
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Execute

func main() {
	println(even_fibonacci(s0, s1))
}