class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        // Initialize result with n (length of the array)
        let res = nums.length;

        for (let i = 0; i < nums.length; i++) {
            // Add the index and subtract the element value
            res += i - nums[i];
        }

        // The remaining value is the missing number
        return res;
    }
}
