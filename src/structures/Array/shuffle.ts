/**
 * Returns a permuted copy of `arr` using the Durstenfeld improvement on the
 * Fischer-Yates shuffle.
 * @example
 * shuffleArray([1, 2, 3, 4, 5]) // returns a shuffled copy
 */
function shuffleArray<T>(arr: T[]) {
   const copy = arr.slice();
   for (let i = copy.length - 1; 0 < i; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
   }
   return copy
}