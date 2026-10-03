class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = {};

        for (const num of nums) {
            freq[num] = (freq[num] || 0) + 1;
        }

        let arr = Object.entries(freq).sort((a, b) => b[1] - a[1]);

        return arr.map((itm) => itm[0]).slice(0, k);
    }
}
