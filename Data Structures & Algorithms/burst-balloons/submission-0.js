class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums) {
        // Add padding of 1s to the beginning and end
        nums = [1, ...nums, 1];

        // Use a Map to mimic the Python dictionary for memoization
        const dp = new Map();

        const dfs = (l, r) => {
            // Base case: no balloons left in this range
            if (l > r) return 0;

            // Check memoization cache
            const key = `${l},${r}`;
            if (dp.has(key)) return dp.get(key);

            dp.set(key, 0);

            // Try bursting every balloon 'i' as the LAST balloon to burst in this range
            for (let i = l; i <= r; i++) {
                let coins = nums[l - 1] * nums[i] * nums[r + 1];
                coins += dfs(l, i - 1) + dfs(i + 1, r);

                dp.set(key, Math.max(dp.get(key), coins));
            }

            return dp.get(key);
        };

        // Start DFS from the first to the last original balloon (excluding padding)
        return dfs(1, nums.length - 2);
    }
}
