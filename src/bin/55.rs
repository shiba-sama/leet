// —————————————————————————————————————————————————————————————————————————————
// Solution

// fn can_jump(nums: Vec<i32>) -> bool {
//    let mut d = 0;
//    for i in 0..nums.len() {
//       if i > d { return false }
//       d = d.max(i + nums[i] as usize);
//    }
//    return true;
// }

fn can_jump(nums: Vec<i32>) -> bool {
   let mut i = 0;
   let mut d = 0;
   while i < nums.len() && i <= d {
      d = d.max(i + nums[i] as usize);
      i += 1;
   }
   return i == nums.len();
}

fn main() {
   println!("Can jump: {}", can_jump(vec![2, 3, 1, 1, 4]));
   println!("Can jump: {}", can_jump(vec![3, 2, 1, 0, 4]));
}