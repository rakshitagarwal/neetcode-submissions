class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        const m = word1.length;
        const n = word2.length;

        // dp[i][j] = minimum operations
        // needed for word1[i:] -> word2[j:]
        const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

        // if word2 finished
        for (let i = 0; i <= m; i++) dp[i][n] = m - i;

        // if word1 finished
        for (let j = 0; j <= n; j++) dp[m][j] = n - j;

        // build from back
        for (let i = m - 1; i >= 0; i--) {
            for (let j = n - 1; j >= 0; j--) {
                // characters already match
                if (word1[i] === word2[j]) {
                    dp[i][j] = dp[i + 1][j + 1];
                } else {
                    // insert, delete, replace
                    dp[i][j] = 1 + Math.min(dp[i][j + 1], dp[i + 1][j], dp[i + 1][j + 1]);
                }
            }
        }

        return dp[0][0];
    }
}
