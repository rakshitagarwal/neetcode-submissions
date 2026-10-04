class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0,
            max_len = 0,
            max_freq = 0,
            map = new Map();

        for (let i = 0; i < s.length; i++) {
            let char = s[i];
            map.set(char, (map.get(char) || 0) + 1);
            max_freq = Math.max(max_freq, map.get(char));

            if (i - left + 1 - max_freq > k) {
                map.set(s[left], map.get(s[left]) - 1);
                left++;
            }

            max_len = Math.max(max_len, i - left + 1);
        }

        return max_len;
    }
}
