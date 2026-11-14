class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        // res tracks the number of jumps
        let res = 0;
        // l and r represent the current window/range of indices we can reach
        let l = 0;
        let r = 0;

        // Keep expanding the window until we can reach the last index
        while (r < nums.length - 1) {
            // Track the farthest index we can reach from the current window
            let farthest = 0;

            // Iterate through every index in the current window (l to r inclusive)
            for (let i = l; i <= r; i++) {
                farthest = Math.max(farthest, i + nums[i]);
            }

            // Move the left pointer to the start of the next window
            l = r + 1;
            // Move the right pointer to the farthest reachable index
            r = farthest;
            // Increment the jump counter
            res += 1;
        }

        // Return the minimum number of jumps
        return res;
    }
}
