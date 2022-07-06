// —————————————————————————————————————————————————————————————————————————————
// Environment

type ListNode = {
   val: BigInt
   next: ListNode | null
}

function ListNode(val=0n, next:ListNode|null=null): ListNode {
   return { val, next, }
}

function listToNumber(l:ListNode): bigint {
   let digits:BigInt[] = []
   let curr:ListNode|null = l
   while (curr) {
      digits.unshift(curr.val)
      curr = curr.next
   }
   return BigInt(digits.join(""))
}

// —————————————————————————————————————————————————————————————————————————————
// Solve

function addTwoNumbers(l1:ListNode, l2:ListNode): ListNode {
   const s1 = listToNumber(l1)
   const s2 = listToNumber(l2)
   const sum = s1 + s2
   const [first, ...rest] = String(sum).split("").map(BigInt).reverse()

   let root = ListNode(first)
   let curr = root

   for (const digit of rest) {
      curr.next = ListNode(digit)
      curr = curr.next
   }

   return root
}

// —————————————————————————————————————————————————————————————————————————————
// Test

let l1 = ListNode(9n, ListNode(2n, ListNode(3n)))               // 329
let l2 = ListNode(4n, ListNode(5n, ListNode(6n, ListNode(7n)))) // 7654

export default {}
