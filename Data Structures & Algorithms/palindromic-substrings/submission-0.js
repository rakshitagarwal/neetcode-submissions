class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0;

        for (let i = 0; i < s.length; i++) {
            // odd length
            let l = i,
                r = i;
            while (l >= 0 && r <= s.length && s[l] === s[r]) {
                count++;
                l -= 1;
                r += 1;
            }

            // even length
            ((l = i), (r = i + 1));
            while (l >= 0 && r <= s.length && s[l] === s[r]) {
                count++;
                l -= 1;
                r += 1;
            }
        }

        return count;
    }
}
