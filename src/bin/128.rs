use std::fs;
use std::collections::HashSet;
use std::iter::FromIterator;

fn max_consecutive(ints: Vec<i32>) -> i32 {
   let mut set:HashSet<i32> = HashSet::from_iter(ints.clone());
   let mut best = 0;

   for i in ints {
      let mut pos = i;
      let mut neg = i;
      while set.remove(&(pos + 1)) { pos += 1 }
      while set.remove(&(neg - 1)) { neg -= 1 }
      best = best.max(pos - neg + 1);
   }

   return best;
}

fn main() {
   let ints = fs::read_to_string("./src/data/128.txt")
      .expect("could not read file")
      .lines()
      .map(|l| l.parse::<i32>().unwrap())
      .collect::<Vec<i32>>();
   println!("Max consecutive run: {}", max_consecutive(ints));
}