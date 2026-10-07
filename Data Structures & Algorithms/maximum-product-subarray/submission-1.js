class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let n = nums.length;
        let dpMax = new Array(n);
        let dpMin = new Array(n);

        dpMax[0] = nums[0];
        dpMin[0] = nums[0];
        let result = nums[0];

        for (let i = 1; i < n; i++) {
            dpMax[i] = Math.max(nums[i], nums[i] * dpMax[i - 1], nums[i] * dpMin[i - 1]);
            dpMin[i] = Math.min(nums[i], nums[i] * dpMax[i - 1], nums[i] * dpMin[i - 1]);

            result = Math.max(dpMax[i], result);
        }

        return result;
    }
}
