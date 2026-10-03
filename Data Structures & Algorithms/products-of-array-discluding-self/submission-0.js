class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = [], prefix = 1, postfix = 1;
        
        for (let i = 0; i < nums.length; i++) {
            res[i] = prefix;
            prefix *= nums[i];
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            res[i] *= postfix;
            postfix *= nums[i];
        }

        return res;
    }
}
