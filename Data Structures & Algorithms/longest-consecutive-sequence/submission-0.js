class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums), longest = 0;

        for (const num of set) {
            if (!set.has(num - 1)) {

                let count = 1, current = num;
                while (set.has(current + 1)) {
                    count++;
                    current++;
                }

                longest = Math.max(longest, count);
            }
        }
        
        return longest;
    }
}
