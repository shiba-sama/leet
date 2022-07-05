use num_bigint::BigUint;
use num_traits::{Zero, One};
use std::mem::replace;

fn fib(n:usize) -> BigUint {
   let mut s0:BigUint = Zero::zero();
   let mut s1:BigUint = One::one();

   for _i in 0..n { 
      let temp = &s0 + &s1;
      s0 = replace(&mut s1, temp);
   }

   return s0
}

fn factorial(n:usize) -> BigUint {
   let mut s:BigUint = One::one();
   for i in 1..n { s *= i }
   return s
}

fn main() {
   println!("Fibonacci {}", fib(1000));
   println!("Factorial {}", factorial(100));
}