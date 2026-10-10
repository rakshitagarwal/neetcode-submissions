class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        let m = text1.length;
        let n = text2.length;
        // this is a 2D DP problem
        let dp = Array.from(Array(m + 1), () => new Array(n + 1).fill(0)); // fill matrix with 0

        for (let i = 1; i <= m; i++) {
            // text 1 chars traversal
            for (let j = 1; j <= n; j++) {
                // text 2 chars traversal
                if (text1[i - 1] === text2[j - 1]) {
                    // chars match
                    dp[i][j] = dp[i - 1][j - 1] + 1; // diagonal DP + 1
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // max of left or above
                }
            }
        }

        return dp[m][n];
    }
}
