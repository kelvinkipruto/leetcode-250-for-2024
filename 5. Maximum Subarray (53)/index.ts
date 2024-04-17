function maxSubArray(nums: number[]): number {
    let max = nums[0];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        max = Math.max(max, sum);
        if (sum < 0) {
            sum = 0;
        }
    }
    return max;
};
/**
 * The above solution has a time complexity of O(n) and a space complexity of O(1).
 * This is because it has a single loop that iterates through the nums array, and performs a constant number of operations in each iteration.
 * 
 * The space complexity is O(1) because it uses a constant amount of space to store the maximum sum and the current sum. The size of these variables does not depend on the size of the nums array, so the space complexity is O(1).
 * 
 * The idea behind this solution is to keep track of the maximum sum of subarrays ending at each index, and update the maximum sum as we iterate through the array. If the current sum becomes negative, we reset it to 0, as a negative sum cannot contribute to the maximum sum of the subarray.
 */
