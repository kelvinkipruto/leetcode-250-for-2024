// This function has a time complexity of O(n^2) because of the nested for loop.
function twoSum1(nums: number[], target: number): number[] {
    
   for(let i = 0; i < nums.length; i++) {
       for(let j = i + 1; j < nums.length; j++) {
           if(nums[i] + nums[j] === target) {
               return [i, j];
           }
       }
   }
        return [];
};


// This function has a time complexity of O(n) because of the use of a Map.
// The Map has a time complexity of O(1) for get and set operations.
// The for loop has a time complexity of O(n).
// The overall time complexity is O(n).
function twoSum(nums: number[], target: number): number[] {
    let numIndices = new Map<number, number>();

    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if(numIndices.has(complement)) {
            return [numIndices.get(complement) as number, i];
        }

        numIndices.set(nums[i], i);
    }

    return [];
}
