class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0,
            max_len = 0,
            map = new Map();
            
        for (let i = 0; i < s.length; i++) {
            let char = s[i];

            while (map.has(char)) {
                map.delete(s[left]);
                left++;
            }

            map.set(char, 1);
            max_len = Math.max(max_len, i - left + 1);
        }

        return max_len;
    }
}
