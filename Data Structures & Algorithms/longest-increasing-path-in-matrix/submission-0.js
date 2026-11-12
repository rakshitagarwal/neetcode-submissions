class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        if (!matrix || matrix.length === 0) return 0;

        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        // Using a Map to mimic the Python dictionary
        const dp = new Map();

        const dfs = (r, c, prevVal) => {
            // Base case: out of bounds or not strictly increasing
            if (r < 0 || r === ROWS || c < 0 || c === COLS || matrix[r][c] <= prevVal) {
                return 0;
            }

            // Check memoization cache
            const key = `${r},${c}`;
            if (dp.has(key)) {
                return dp.get(key);
            }

            let res = 1;
            res = Math.max(res, 1 + dfs(r + 1, c, matrix[r][c]));
            res = Math.max(res, 1 + dfs(r - 1, c, matrix[r][c]));
            res = Math.max(res, 1 + dfs(r, c + 1, matrix[r][c]));
            res = Math.max(res, 1 + dfs(r, c - 1, matrix[r][c]));

            // Save to cache
            dp.set(key, res);
            return res;
        };

        // Iterate through every cell to find the starting point of the longest path
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                dfs(r, c, -1);
            }
        }

        // Return the maximum value found in the dp cache
        return Math.max(...dp.values());
    }
}
