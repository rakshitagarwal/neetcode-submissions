class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let dp = Array.from(Array(m), () => new Array(n).fill(0)); // set matrix with 0

        // first column of all rows set to 1
        for (let i = 0; i < m; i++) {
            dp[i][0] = 1;
        }

        // first row with all columns set to 1
        for (let j = 0; j < n; j++) {
            dp[0][j] = 1;
        }

        // Fill the rest of the dp array
        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]; // above DP + left DP
            }
        }

        return dp[m - 1][n - 1];
    }
}
