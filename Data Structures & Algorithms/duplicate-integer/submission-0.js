class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if (nums.length <= 1) return false;
        let set = new Set(nums);
        return set.size !== nums.length;
    }
}
