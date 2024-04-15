function containsDuplicate(nums: number[]): boolean {
    let numSet = new Set<number>();

    for (let i = 0; i < nums.length; i++) {
        if (numSet.has(nums[i])) {
            return true;
        }

        numSet.add(nums[i]);
    }

    return false;
};

/**
 * 
 * This has a time complexity of O(n) and a space complexity of O(n).
 * This is because it has a single loops that iterates through the nums array, and performs a constant number of operations in each iteration.
 * 
 * The space complexity is O(n) because it uses a Set to store the unique elements in the nums array. The size of the Set will be at most equal to the size of the nums array, so the space complexity is O(n).
 * 
 **/

