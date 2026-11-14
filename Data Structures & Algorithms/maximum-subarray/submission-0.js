class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        // Initialize maxSub with the first element (handles all-negative arrays)
        let maxSub = nums[0];
        // Running sum of the current subarray
        let curSum = 0;

        for (let n of nums) {
            // If running sum goes negative, reset it to 0 (start fresh)
            if (curSum < 0) {
                curSum = 0;
            }
            
            // Add current number to running sum
            curSum += n;
            // Update max if current sum is larger
            maxSub = Math.max(maxSub, curSum);
        }

        // Return the largest sum found
        return maxSub;
    }
}
