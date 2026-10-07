class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let dp = new Array(nums.length).fill(1)

        for (let i = 1; i <= nums.length; i++) {
            for (let j = i; j >= 0; j--) {
                if (nums[i] > nums[j]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
        }

        return Math.max(...dp);
    }
}
