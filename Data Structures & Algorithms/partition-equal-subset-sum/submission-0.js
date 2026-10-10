class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        // Calculate the sum of all elements in the array
        const totalSum = nums.reduce((acc, curr) => acc + curr, 0);

        // If the total sum is odd, it's impossible to partition into two equal integer subsets
        if (totalSum % 2 !== 0) {
            return false;
        }

        // dp stores all possible subset sums we can make with the elements processed so far
        let dp = new Set();
        dp.add(0);

        const target = totalSum / 2;

        // Iterate backwards through the numbers (matching the Python logic)
        for (let i = nums.length - 1; i >= 0; i--) {
            const nextDP = new Set();

            for (const t of dp) {
                // Option 1: Include the current number
                nextDP.add(t + nums[i]);

                // Option 2: Exclude the current number
                nextDP.add(t);
            }

            // Move to the next state
            dp = nextDP;
        }

        // Return true if the target sum exists in our set of possible sums
        return dp.has(target);
    }
}
