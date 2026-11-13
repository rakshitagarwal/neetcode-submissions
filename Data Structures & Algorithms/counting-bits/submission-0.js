class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        // Initialize an array of size n + 1 with zeros to store the count of 1s
        const dp = new Array(n + 1).fill(0);
        let offset = 1; // Tracks the current power of 2

        for (let i = 1; i <= n; i++) {
            // When 'i' reaches double the current offset, update the offset to this power of 2
            if (offset * 2 == i) {
                offset = i;
            }
            // The number of 1s for 'i' is 1 plus the number of 1s in (i - offset)
            dp[i] = 1 + dp[i - offset];
        }

        return dp;
    }
}
