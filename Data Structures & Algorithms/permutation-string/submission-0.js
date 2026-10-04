class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;
        let map = new Map();
        for (let char of s1) map.set(char, (map.get(char) || 0) + 1);

        let left = 0, matched = 0, requiredMatch = map.size;
        
        for (let i = 0; i < s2.length; i++) {
            let char = s2[i];
            if (map.has(char)) {
                map.set(char, (map.get(char) || 0) - 1);
                if (map.get(char) === 0) matched++;
            }

            if (i >= s1.length - 1) {
                if (matched === requiredMatch) return true;
                let leftChar = s2[left];
                left++;

                if (map.has(leftChar)) {
                    if (map.get(leftChar) === 0) matched--;
                    map.set(leftChar, (map.get(leftChar) || 0) + 1);
                }
            }
        }
        return false;
    }
}
