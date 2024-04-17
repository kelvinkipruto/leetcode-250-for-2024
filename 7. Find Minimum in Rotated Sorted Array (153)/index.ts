function findMin(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return nums[left];
};

/**
 * The above solution has a time complexity of O(log n) and a space complexity of O(1).
 * This is because it uses binary search to find the minimum element in the rotated sorted array, which has a time complexity of O(log n).
 * 
 * The space complexity is O(1) because it uses a constant amount of space to store the left and right pointers. The size of these variables does not depend on the size of the nums array, so the space complexity is O(1).
 * 
 * The idea behind this solution is to use binary search to find the minimum element in the rotated sorted array. We compare the middle element with the right element to determine which half of the array to search in, and update the left and right pointers accordingly.
 */
