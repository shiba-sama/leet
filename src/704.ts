function search(nums:number[], target:number): number {
  let i = Math.floor(nums.length / 2)

  if (nums[i] === target) return i
  if (nums.length === 1) return -1

  if (nums[i] > target) {
    const candidate = search(nums.slice(0, i), target)
    return candidate === -1 
      ? -1 
      : candidate
  }

  const result = search(nums.slice(i), target)
  return result === -1 
    ? -1 
    : i + result
}

const test = [-4, 2, 4, 6, 7, 10, 12, 15]