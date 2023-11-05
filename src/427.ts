// —————————————————————————————————————————————————————————————————————————————
// Quad Tree

/**

```
TL TR
BL BR
```
*/
interface QuadNode<T> {
   value: T
   isLeaf: boolean
   "BL": QuadNode<T> | null
   "BR": QuadNode<T> | null
   "TL": QuadNode<T> | null
   "TR": QuadNode<T> | null
}

interface QuadTree<T> {
   root: QuadNode<T> | null
}
