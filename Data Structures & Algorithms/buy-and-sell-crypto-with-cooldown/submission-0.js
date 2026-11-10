class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // Memoization object to store subproblem results (key: "index-buying")
        const dp = {};

        const dfs = (i, buying) => {
            // Base case: if we go past the last day, no more profit can be made
            if (i >= prices.length) return 0;

            let key = `${i}-${buying}`;
            // Return cached result if already computed
            if (key in dp) return dp[key];

            // Option 1: Do nothing (cooldown) on the current day
            let cooldown = dfs(i + 1, buying);

            if (buying) {
                // Option 2: Buy stock on the current day (subtract price)
                let buy = dfs(i + 1, false) - prices[i];
                dp[key] = Math.max(buy, cooldown);
            } else {
                // Option 3: Sell stock on the current day (add price).
                // i + 2 accounts for the 1-day cooldown restriction after selling.
                let sell = dfs(i + 2, true) + prices[i];
                dp[key] = Math.max(sell, cooldown);
            }

            return dp[key];
        };

        // Start from day 0 with the intention/ability to buy
        return dfs(0, true);
    }
}
