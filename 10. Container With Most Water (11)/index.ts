function maxArea(height: number[]): number {
    let maxArea = 0;
    let low = 0;
    let high = height.length - 1;
    while (low < high) {
        maxArea = Math.max(maxArea, Math.min(height[low], height[high]) * (high - low));
        if (height[low] < height[high]) {
            low++;
        } else {
            high--;
        }
    }
    return maxArea;
};

/**
 * The above solution has a time complexity of O(n) and a space complexity of O(1).
 * This is because it uses a two-pointer approach to find the maximum area between two lines in the array, which has a time complexity of O(n).
 * 
 * The space complexity is O(1) because it uses a constant amount of space to store the maximum area. The size of this variable does not depend on the size of the height array, so the space complexity is O(1).
 * 
 * The idea behind this solution is to use a two-pointer approach to find the maximum area between two lines in the array. We start with two pointers at the beginning and end of the array and calculate the area between the two lines. We update the maximum area if the current area is greater than the maximum area.
 * 
 * We then move the pointer with the smaller height towards the center of the array to find a larger area. We continue this process until the two pointers meet in the center of the array.
 * 
 * This solution is efficient because it uses a two-pointer approach to find the maximum area between two lines in the array.
 * 
 * The time complexity of this solution is O(n) because we iterate over the array once and use a two-pointer approach to find the maximum area between two lines. The two-pointer approach has a time complexity of O(n), so the overall time complexity is O(n).
 * 
 */
