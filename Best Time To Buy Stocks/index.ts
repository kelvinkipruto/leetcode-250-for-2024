function maxProfit(prices: number[]): number {
    let minPrice = Number.MAX_VALUE;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
};

/** 
 * This has a time complexity of O(n) and a space complexity of O(1).
 * This is because it has a single loops that iterates through the prices array, and performs a constant number of operations in each iteration.
 * The space complexity is O(1) because it uses a constant amount of space, regardless of the size of the input.
 * 
**/
