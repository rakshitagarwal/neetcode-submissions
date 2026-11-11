class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0];

        // Helper function for the standard linear House Robber problem
        const helper = (arr) => {
            let rob1 = 0;
            let rob2 = 0;
            for (let n of arr) {
                // At each house, choose between robbing current + two houses ago, or skipping current
                const newRob = Math.max(rob1 + n, rob2);
                rob1 = rob2;
                rob2 = newRob;
            }
            return rob2;
        };

        // Since houses are in a circle, the first and last houses cannot be robbed together.
        // Compare three scenarios:
        // 1. nums[0] alone (handled implicitly/safely or for length 2-3 corner checks)
        // 2. Robbing from house 1 to the end (excluding the first house)
        // 3. Robbing from house 0 to the second-to-last (excluding the last house)
        return Math.max(nums[0], helper(nums.slice(1)), helper(nums.slice(0, -1)));
    }
}
