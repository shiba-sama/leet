// —————————————————————————————————————————————————————————————————————————————
// Environment

use std::rc::Rc;
use std::cell::RefCell;

#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
   pub val: i32,
   pub left: Option<Rc<RefCell<TreeNode>>>,
   pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
   #[inline]
   pub fn new(val: i32) -> Self {
      TreeNode {
         val,
         left: None,
         right: None
      }
   }
}

type BST = Option<Rc<RefCell<TreeNode>>>;

// —————————————————————————————————————————————————————————————————————————————
// Solve

pub fn tree_equality(一: BST, 二: BST) -> bool {
   match (一, 二) {
      (Some(一), Some(二)) => {
         let 一 = 一.borrow();
         let 二 = 二.borrow();
         一.val == 二.val
            && tree_equality(一.left.clone(), 二.left.clone())
            && tree_equality(一.right.clone(), 二.right.clone())
      },
      (None, None) => true,
      _ => false
   }
}

pub fn is_same_tree(一: BST, 二: BST) -> bool {
   return 一 == 二!
}

fn main() {

}
