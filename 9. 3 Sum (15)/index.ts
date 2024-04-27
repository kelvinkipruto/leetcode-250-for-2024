function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            let low = i + 1;
            let high = nums.length - 1;
            const sum = 0 - nums[i];
            while (low < high) {
                if (nums[low] + nums[high] === sum) {
                    result.push([nums[i], nums[low], nums[high]]);
                    while (low < high && nums[low] === nums[low + 1]) low++;
                    while (low < high && nums[high] === nums[high - 1]) high--;
                    low++;
                    high--;
                } else if (nums[low] + nums[high] < sum) {
                    low++;
                } else {
                    high--;
                }
            }
        }
    }
    return result;
};

/**
 * The above solution has a time complexity of O(n^2) and a space complexity of O(1).
 * This is because it uses a two-pointer approach to find the three elements that sum to zero in the array, which has a time complexity of O(n^2).
 * 
 * The space complexity is O(1) because it uses a constant amount of space to store the result array. The size of this array does not depend on the size of the nums array, so the space complexity is O(1).
 * 
 * The idea behind this solution is to sort the array and then use a two-pointer approach to find the three elements that sum to zero. We iterate over the array and for each element, we use two pointers to find the other two elements that sum to zero with the current element.
 * 
 * We skip duplicate elements to avoid duplicate triplets in the result array. We also update the pointers based on the sum of the three elements to move closer to the target sum of zero.
 * 
 * This solution is efficient because it avoids duplicate triplets and uses a two-pointer approach to find the three elements that sum to zero in the array.
 * 
 * The time complexity of this solution is O(n^2) because we iterate over the array once and for each element, we use a two-pointer approach to find the other two elements that sum to zero. The two-pointer approach has a time complexity of O(n), so the overall time complexity is O(n^2).
 * 
 */
