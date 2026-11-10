class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        // Stores total ways to form each target amount
        let dp = new Array(amount + 1).fill(0);
        // Base case: 1 way to make 0 amount (use no coins)
        dp[0] = 1;

        // Process coins from last to first
        for (let i = coins.length - 1; i >= 0; i--) {
            const nextDP = new Array(amount + 1).fill(0);
            nextDP[0] = 1;

            for (let a = 1; a <= amount; a++) {
                // Option 1: Skip the current coin
                nextDP[a] = dp[a];

                // Option 2: Include current coin (if amount allows)
                if (a - coins[i] >= 0) {
                    nextDP[a] += nextDP[a - coins[i]];
                }
            }
            // Move to next iteration's DP state
            dp = nextDP;
        }

        return dp[amount];
    }
}
