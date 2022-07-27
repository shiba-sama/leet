// —————————————————————————————————————————————————————————————————————————————
// Plus One

function plusOne(digits:number[]) {
   return (BigInt(digits.join("")) + 1n)
      .toString()
      .split("")
      .map(Number)
}