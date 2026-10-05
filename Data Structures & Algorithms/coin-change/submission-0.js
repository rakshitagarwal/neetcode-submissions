class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let dp = Array(amount + 1).fill(Infinity);
        dp[0] = 0;

        for (let a = 1; a <= amount; a++) { // 1 to target amount 
            for (let c of coins) { // 1 + comes from choosing a coin from all coins
                if (a - c >= 0) { // coin choosen shouldn't be more than amount
                    dp[a] = Math.min(dp[a], 1 + dp[a - c]); // find min no. coins to make that amount
                }
            }
        }

        return dp[amount] > amount ? -1 : dp[amount];
    }
}
