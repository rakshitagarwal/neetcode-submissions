class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        // Initialize accumulator for XOR operations (0 ^ X = X)
        let res = 0;

        // XOR all elements in the array
        // Duplicate numbers cancel out (X ^ X = 0)
        for (const num of nums) {
            res ^= num;
        }

        // Remaining value is the unique single number
        return res;
    }
}
