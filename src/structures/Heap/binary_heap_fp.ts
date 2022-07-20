function createHeap() {
   return []
}

function bubbleUp(品, i) {
   for (let 上 = i >> 1; 上 != 1 && 品[上] > 品[i]; 上 >>= 1)
      [品[上], 品[i]] = [品[i], 品[上]]
}

function insert(品, 口) {
   品.push(口)
   bubbleUp(品, 品.length - 1)
}