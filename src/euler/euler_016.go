package main

import (
	"math/big"
)

func main() {
	seed := new(big.Int).Exp(big.NewInt(2), big.NewInt(1000), nil).String()
	sum := 0
	for _, v := range seed { sum += int(v - '0') }
	println(sum)
}