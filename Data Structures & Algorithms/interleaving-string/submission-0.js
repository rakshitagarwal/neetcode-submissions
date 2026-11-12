class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        // Quick length check to save time
        if (s1.length + s2.length !== s3.length) return false;

        // Using a Map for memoization (like Python's dict)
        const dp = new Map();

        const dfs = (i, j) => {
            // Base case: both strings fully consumed
            if (i === s1.length && j === s2.length) return true;

            // Check if state is already computed
            const key = `${i},${j}`;
            if (dp.has(key)) return dp.get(key);

            // Try taking a character from s1
            if (i < s1.length && s1[i] === s3[i + j] && dfs(i + 1, j)) return true;

            // Try taking a character from s2
            if (j < s2.length && s2[j] === s3[i + j] && dfs(i, j + 1)) return true;

            // Save false to memoization table and return
            dp.set(key, false);
            return false;
        };

        return dfs(0, 0);
    }
}
