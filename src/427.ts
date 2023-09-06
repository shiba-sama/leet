// —————————————————————————————————————————————————————————————————————————————
// Quad Tree

/**

```
01 11
00 10
```
*/
interface Node<T> {
   value: T
   isLeaf: boolean
   "00": Node<T> | null
   "01": Node<T> | null
   "10": Node<T> | null
   "11": Node<T> | null
}

interface QuadTree<T> {
   root: Node<T> | null
}

class QuadNode {
   
}