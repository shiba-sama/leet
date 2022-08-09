// —————————————————————————————————————————————————————————————————————————————
// AA Tree

class Node<T> {
   key: T
   level: number
   小?: Node<T>
   大?: Node<T>

   constructor(key:T, level=1, 小?:Node<T>, 大?:Node<T>) {
      this.key = key
      this.level = level
      this.小 = 小
      this.大 = 大
   }
}

class AATree<T> {
   #root?: Node<T>
   #size = 0

   size(): number { return this.#size }

   put(key:T): boolean {
      const oldSize = this.#size
      this.#root = this.#recursivePut(this.#root, key)
      return this.#size === oldSize
   }

   *iter(node=this.#root): IterableIterator<T> {
      if (!node) return
      yield* this.iter(node.小)
      yield node.key
      yield* this.iter(node.大)
   }

   #recursivePut(node: Node<T> | undefined, key: T): Node<T> {
      if (!node) {
         this.#size++;
         return new Node(key);
      }
      if (key !== node.key) {
         const next: keyof Node<T> = key < node.key ? "小" : "大"
         node[next] = this.#recursivePut(node[next], key)
         if (node.level === node.小?.level) this.#skew(node)
         if (node.level === node.大?.level && node.level === node.大?.大?.level)
            this.#split(node)
      }
      return node
   }

   #skew(node: Node<T>) { // right rotation
      node.大 = new Node(node.key, node.level, node.小!.大, node.大)
      node.key = node.小!.key
      node.小 = node.小!.小
   }

   #split(node: Node<T>) { // left rotation + split
      node.小 = new Node(node.key, node.level, node.小, node.大!.小)
      node.key = node.大!.key
      node.大 = node.大!.大
      node.level++
   }
}