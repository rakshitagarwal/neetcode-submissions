class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0,
            right = 1,
            max_profit = 0;

        while (right < prices.length) {
            if (prices[left] < prices[right]) {
                let profit = prices[right] - prices[left];
                max_profit = Math.max(max_profit, profit);
            } else {
                left = right;
            }
            right++;
        }

        return max_profit;
    }
}
