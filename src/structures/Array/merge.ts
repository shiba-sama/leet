// merge the integers of two arrays
function merge(arr1:number[], arr2:number[]): number[] {
   let p1 = 0;
   let p2 = 0;
   let merged:number[] = [];

   while (p1 < arr1.length && p2 < arr2.length) {
      if (arr1[p1] < arr2[p2]) {
         merged.push(arr1[p1]);
         p1++;
      }

      else {
         merged.push(arr2[p2]);
         p2++;
      }
   }

   return merged
}