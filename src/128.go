package main

import (
   "os"
   "bufio"
   "strconv"
)

// —————————————————————————————————————————————————————————————————————————————
// Solve

func max_consecutive(ints []int) int {
	max := 0
	set := make(map[int]struct{})
	for _, v := range ints {
		set[v] = struct{}{}
	}
	for v := range set {
		pos := v
		neg := v
      for _, ok := set[pos + 1]; ok; _, ok = set[pos + 1] {
         delete(set, pos + 1)
         pos++
      }
      for _, ok := set[neg - 1]; ok; _, ok = set[neg - 1] {
         delete(set, neg - 1)
         neg--
      }
		diff := pos - neg + 1
		if max < diff { max = diff }
	}
	return max
}

// —————————————————————————————————————————————————————————————————————————————
// Test

func main() {
   file, err := os.Open("./data/128.txt")
   if err != nil { panic(err) }

   var ints []int
   scanner := bufio.NewScanner(file)

   for scanner.Scan() {
      int, _ := strconv.Atoi(scanner.Text())
      ints = append(ints, int)
   }

   file.Close()

	println(max_consecutive(ints))
}