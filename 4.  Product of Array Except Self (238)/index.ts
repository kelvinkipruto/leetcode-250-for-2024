function productExceptSelf1(nums: number[]): number[] {

    const answ: number[] = []

    for(let i = 0; i < nums.length; i++) {
        let product = 1;
        for(let j = 0; j < nums.length; j++) {
            if(i !== j) {
                product *= nums[j];
            }
        }
        answ.push(product);
    }

    return answ;
};

/**
 * The above solution has a time complexity of O(n^2) and a space complexity of O(n).
 * This is because it has two nested loops that iterate through the nums array, and performs a constant number of operations in each iteration.
 * 
 * The space complexity is O(n) because it uses an array to store the products of all elements in the nums array except the element at the current index. The size of the array will be equal to the size of the nums array, so the space complexity is O(n).
 */


function productExceptSelf(nums: number[]): number[] {
    const length = nums.length;
    const leftProducts = new Array(length).fill(1);
    const rightProducts = new Array(length).fill(1);
    const output = new Array(length);

    for (let i = 1; i < length; i++) {
        leftProducts[i] = nums[i - 1] * leftProducts[i - 1];
    }

    for (let i = length - 2; i >= 0; i--) {
        rightProducts[i] = nums[i + 1] * rightProducts[i + 1];
    }

    for (let i = 0; i < length; i++) {
        output[i] = leftProducts[i] * rightProducts[i];
    }

    return output;
};

/**
 * The above solution has a time complexity of O(n) and a space complexity of O(n).
 * This is because it has three loops that iterate through the nums array, and performs a constant number of operations in each iteration.
 * 
 * The space complexity is O(n) because it uses three arrays to store the products of all elements to the left of the current index, all elements to the right of the current index, and the final output array. The size of each array will be equal to the size of the nums array, so the space complexity is O(n).
 * 
 * The idea behind this solution is to calculate the product of all elements to the left of the current index, and the product of all elements to the right of the current index, and then multiply these two products to get the final product except self.
 */
