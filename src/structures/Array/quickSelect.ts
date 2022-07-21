// —————————————————————————————————————————————————————————————————————————————
// Environment

function swap(arr:number[], i:number, j:number) {
   [arr[i], arr[j]] = [arr[j], arr[i]];
}

function λ(a:number, b:number) {
   return Math.sign(a - b)
}

// —————————————————————————————————————————————————————————————————————————————
// Quick Select
