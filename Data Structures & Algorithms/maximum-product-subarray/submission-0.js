class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let prevMax = nums[0],
            prevMin = nums[0],
            result = nums[0];
        for (let i = 1; i < nums.length; i++) {
            let currMax = Math.max(nums[i], nums[i] * prevMax, nums[i] * prevMin);
            let currMin = Math.min(nums[i], nums[i] * prevMax, nums[i] * prevMin);

            prevMax = currMax;
            prevMin = currMin;

            result = Math.max(result, currMax);
        }

        return result;
    }
}
