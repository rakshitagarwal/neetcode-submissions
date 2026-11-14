class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        // Set the initial goal to the last index of the array
        let goal = nums.length - 1;

        // Iterate backwards from the last index to the first
        for (let i = nums.length - 1; i >= 0; i--) {
            // If from the current index we can reach or surpass the goal...
            if (i + nums[i] >= goal) {
                // ...update the goal to the current index
                goal = i;
            }
        }

        // If the goal reaches index 0, we can jump to the end
        return goal === 0;
    }
}
