package main

// —————————————————————————————————————————————————————————————————————————————
// Solve

func max_consecutive(ints []int) int {
   max := 0
   set := make(map[int]struct{})
   for _, v := range ints { set[v] = struct{}{} }
   for v := range set {
      大 := v
      小 := v
      for { if _, ok := set[大 + 1]; ok { 大++ } else { break } }
      for { if _, ok := set[小 - 1]; ok { 小-- } else { break } }
      diff := 大 - 小 + 1
      if max < diff { max = diff }
   }
   return max
}

func main() {
   numbers := []int{0, 1, 2, 3, 4, 5, 5, -5, -5, -4, -3, -2, -1}
   println(max_consecutive(numbers))
}