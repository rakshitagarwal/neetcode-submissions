class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        // Map to store (running_sum -> frequency of ways to reach this sum)
        let dp = new Map();
        // Base case: There is 1 way to get a sum of 0 initially (before processing any numbers)
        dp.set(0, 1);

        for (let num of nums) {
            let nextDp = new Map();

            for (let [cur_sum, count] of dp) {
                // Option 1: Add '+' before the current number
                nextDp.set(cur_sum + num, (nextDp.get(cur_sum + num) || 0) + count);

                // Option 2: Add '-' before the current number
                nextDp.set(cur_sum - num, (nextDp.get(cur_sum - num) || 0) + count);
            }

            // Move to the next iteration with updated sums
            dp = nextDp;
        }

        // Return the number of ways to reach the target sum, or 0 if unreachable
        return dp.get(target) || 0;
    }
}
