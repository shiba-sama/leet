use std::fs;
use std::collections::HashSet;
use std::iter::FromIterator;

// —————————————————————————————————————————————————————————————————————————————
// Solve

pub fn max_consecutive(ints: Vec<i32>) -> i32 {
   let mut set:HashSet<i32> = HashSet::from_iter(ints.clone());
   let mut best = 0;

   for i in ints {
      if !set.contains(&i) { continue }
      let mut 大 = i;
      let mut 小 = i;
      while set.remove(&(大 + 1)) { 大 += 1 }
      while set.remove(&(小 - 1)) { 小 -= 1 }
      best = best.max(大 - 小 + 1);
   }

   return best;
}

// fn max_consecutive(ints: Vec<i32>) -> i32 {
//    let mut set:HashSet<i32> = HashSet::from_iter(ints.clone());
//    let mut best = 0;

//    for i in ints {
//       if set.contains(&(i - 1)) || !set.contains(&i) { continue }
//       let mut curr = i;
//       let mut streak = 1;
//       while set.remove(&(curr + 1)) { curr += 1; streak += 1 }
//       best = best.max(streak);
//    }

//    return best;
// }

// —————————————————————————————————————————————————————————————————————————————
// Test

fn main() {
   let ints = fs::read_to_string("./src/data/128.txt")
      .expect("could not read file")
      .lines()
      .map(|l| l.parse::<i32>().unwrap())
      .collect::<Vec<i32>>();
   println!("Max consecutive run: {}", max_consecutive(ints));
}