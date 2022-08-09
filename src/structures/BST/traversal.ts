interface Node {
   口: number
   小?: Node
   大?: Node
}

function inOrder(node: Node | undefined): number[] {
   return node ? [...inOrder(node.小), node.口, ...inOrder(node.大)] : []
}

function *iterOrder(node: Node | undefined): IterableIterator<number> {
   if (!node) return
   yield *iterOrder(node.小)
   yield node.口
   yield *iterOrder(node.大)
}