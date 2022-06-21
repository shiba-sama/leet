// —————————————————————————————————————————————————————————————————————————————
// Environment

struct PowerSet<'a, T> {
   items: &'a Vec<T>,
   curr: i32,
}

// —————————————————————————————————————————————————————————————————————————————
// Methods

impl<'a, T> PowerSet<'a, T> {
   pub fn new(items: &'a Vec<T>) -> Self {
      Self { items, curr: 0, }
   }
}

impl<'a, T> Iterator for PowerSet<'a, T> {
   type Item = Vec<&'a T>;

   fn next(&mut self) -> Option<Self::Item> {
      if self.curr == 1 << self.items.len() { return None }
      else {
         let mut result = Vec::new();
         for i in 0..self.items.len() {
            if self.curr & (1 << i) != 0 { result.push(&self.items[i]) }
         }
         self.curr += 1;
         return Some(result);
      }
   }
}

// —————————————————————————————————————————————————————————————————————————————
// Test

fn main() {
   let items = vec![0, 1, 2, 3, 4];
   let powerset = PowerSet::new(&items);
   // for subset in powerset { println!("{:?}", subset) }
   // collect the iterator into a vector
   let subsets:Vec<Vec<&i32>> = powerset.collect();
   println!("{:?}", subsets);
}