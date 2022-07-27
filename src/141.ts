// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Environment

class ListNode {
   val: number
   next: ListNode | null
   constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
   }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Cycle Detection

function hasCycle(head:ListNode|null) {
   let curr = head
   let seen = new Set<ListNode>()
   while (curr) {
      if (seen.has(curr)) return true
      seen.add(curr)
      curr = curr.next
   }
   return false
}