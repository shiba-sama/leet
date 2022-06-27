package main

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Environment

// Find the difference between the sum of the squares of the first one hundred 
// natural numbers and the square of the sum.

func square(a int) int {
	return a * a
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Execute

func main() {
	sum_of_squares := 0
	square_of_sum  := 0

	for i := 1; i < 101; i++ {
		sum_of_squares += square(i)
		square_of_sum += i
	}
	square_of_sum = square(square_of_sum)

	println(square_of_sum - sum_of_squares)
}