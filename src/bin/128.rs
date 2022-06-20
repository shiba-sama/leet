use std::collections::HashSet;
use std::iter::FromIterator;

fn max_consecutive(nums: Vec<i32>) -> i32 {
   let mut set = HashSet::<i32>::from_iter(nums.clone());
   let mut max = 0;

   for i in nums {
      let mut pos = i;
      let mut neg = i;
      while set.remove(&pos) { pos += 1 }
      while set.remove(&neg) { neg -= 1 }
      let diff = pos - neg + 1;
      if max < diff { max = diff }
      println!("{} {} {}", i, pos, neg);
   }

   return max;
}

fn main() {
   let nums = vec![0, 1, 2, 3, 4, 5, 5, -5, -5, -4, -3, -2, -1];
   println!("{}", max_consecutive(nums));
}