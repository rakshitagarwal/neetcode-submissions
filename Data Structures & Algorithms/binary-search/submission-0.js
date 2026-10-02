class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0,
            right = nums.length - 1;
        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);
            if (nums[mid] === target) return mid;
            nums[mid] < target ? (left = mid + 1) : (right = mid - 1);
        }
        return -1;
    }
}
