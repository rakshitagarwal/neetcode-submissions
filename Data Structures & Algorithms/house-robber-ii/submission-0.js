class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0];
        if (nums.length === 2) return Math.max(nums[0], nums[1]);

        let dp1 = new Array(nums.length).fill(0);
        let dp2 = new Array(nums.length).fill(0);

        function robTwice(i, numsLen, dp, nums) {
            dp[i] = nums[i];
            dp[i + 1] = Math.max(dp[i], nums[i + 1]);

            for (let j = i + 2; j <= numsLen; j++) {
                dp[j] = Math.max(dp[j - 1], dp[j - 2] + nums[j]);
            }
        }

        robTwice(0, nums.length - 2, dp1, nums);
        robTwice(1, nums.length - 1, dp2, nums);

        return Math.max(dp1[nums.length - 2], dp2[nums.length - 1]);
    }
}
