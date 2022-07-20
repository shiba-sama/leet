class Node {
   val: any
   kids: { [key: string]: Node }

   constructor(val) {
      this.val = val
      this.kids = {}
   }
}

class Heap {
   root: Node = null

   
}