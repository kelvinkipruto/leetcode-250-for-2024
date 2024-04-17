function maxProduct(nums: number[]): number {
    let max = nums[0];
    let min = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const temp = max;
        max = Math.max(nums[i], Math.max(max * nums[i], min * nums[i]));
        min = Math.min(nums[i], Math.min(temp * nums[i], min * nums[i]));
        result = Math.max(result, max);
    }

    return result;
};

/**
 * The above solution has a time complexity of O(n) and a space complexity of O(1).
 * This is because it has a single loop that iterates through the nums array, and performs a constant number of operations in each iteration.
 * 
 * The space complexity is O(1) because it uses a constant amount of space to store the maximum product, the minimum product, and the result. The size of these variables does not depend on the size of the nums array, so the space complexity is O(1).
 * 
 * The idea behind this solution is to keep track of the maximum product and the minimum product of subarrays ending at each index, and update the maximum product as we iterate through the array. We also keep track of the result, which is the maximum product of all subarrays.
 */
