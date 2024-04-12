### Introduction to Time Complexity

Time complexity is a way to describe the efficiency of an algorithm based on the time it takes to complete as the input size grows. It is often expressed using Big O notation, which describes the upper limit of the running time as a function of the input size. Common Big O notations include O(1), O(log n), O(n), O(n log n), and O(n²).

### Big O Notations and Examples

1. **O(1) - Constant Time**
   An algorithm is said to have constant time complexity if the running time does not change with the size of the input data.

   **Pseudo-code Example:**
   ```
   function checkFirstElement(array):
       return array[0]
   ```

   **TypeScript Example:**
   ```typescript
   function checkFirstElement(array: number[]): number {
       return array[0];
   }
   ```

2. **O(log n) - Logarithmic Time**
   Logarithmic time complexity occurs typically in algorithms that divide the problem in half every time, such as binary search.

   **Pseudo-code Example:**
   ```
   function binarySearch(array, target):
       left = 0
       right = length(array) - 1
       while left <= right:
           mid = (left + right) / 2
           if array[mid] == target:
               return mid
           else if array[mid] < target:
               left = mid + 1
           else:
               right = mid - 1
       return -1
   ```

   **TypeScript Example:**
   ```typescript
   function binarySearch(array: number[], target: number): number {
       let left = 0;
       let right = array.length - 1;
       while (left <= right) {
           let mid = Math.floor((left + right) / 2);
           if (array[mid] === target) {
               return mid;
           } else if (array[mid] < target) {
               left = mid + 1;
           } else {
               right = mid - 1;
           }
       }
       return -1;
   }
   ```

3. **O(n) - Linear Time**
   An algorithm is linear if its time complexity grows linearly with the input size.

   **Pseudo-code Example:**
   ```
   function findMax(array):
       max = array[0]
       for element in array:
           if element > max:
               max = element
       return max
   ```

   **TypeScript Example:**
   ```typescript
   function findMax(array: number[]): number {
       let max = array[0];
       for (let element of array) {
           if (element > max) {
               max = element;
           }
       }
       return max;
   }
   ```

4. **O(n log n) - Log-Linear Time**
   This time complexity is typical for algorithms that perform a logarithmic process (like dividing) within a linear process (like iterating through all elements), such as in quicksort or mergesort.

   **TypeScript Example for Merge Sort:**
   ```typescript
   function mergeSort(array: number[]): number[] {
       if (array.length < 2) {
           return array;
       }
       const middle = Math.floor(array.length / 2);
       const left = mergeSort(array.slice(0, middle));
       const right = mergeSort(array.slice(middle));
       return merge(left, right);
   }

   function merge(left: number[], right: number[]): number[] {
       const result = [];
       while (left.length && right.length) {
           if (left[0] < right[0]) {
               result.push(left.shift());
           } else {
               result.push(right.shift());
           }
       }
       return [...result, ...left, ...right];
   }
   ```

5. **O(n²) - Quadratic Time**
   Quadratic time complexity appears in algorithms where each element of input needs to be compared to every other element, like in bubble sort.

   **TypeScript Example for Bubble Sort:**
   ```typescript
   function bubbleSort(array: number[]): number[] {
       let n = array.length;
       for (let i = 0; i < n; i++) {
           for (let j = 0; j < n - i - 1; j++) {
               if (array[j] > array[j + 1]) {
                   [array[j], array[j + 1]] = [array[j + 1], array[j]];
               }
           }
       }
       return array;
   }
   ```
