class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === "") return "";

        let countT = new Map();
        let window = new Map();

        // Populate countT
        for (let i = 0; i < t.length; i++) {
            let c = t[i];
            countT.set(c, (countT.get(c) || 0) + 1);
        }

        let have = 0;
        let need = countT.size;
        let res = [-1, -1];
        let resLen = Infinity;
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            let c = s[r];
            // Add current character to window map
            window.set(c, (window.get(c) || 0) + 1);

            // If current char is in t and we have enough of it in our window
            if (countT.has(c) && window.get(c) === countT.get(c)) {
                have += 1;
            }

            // While we have a valid window, try to shrink it from the left
            while (have === need) {
                // Update our result
                if (r - l + 1 < resLen) {
                    res = [l, r];
                    resLen = r - l + 1;
                }

                // Pop from the left of our window
                let leftChar = s[l];
                window.set(leftChar, window.get(leftChar) - 1);

                if (countT.has(leftChar) && window.get(leftChar) < countT.get(leftChar)) {
                    have -= 1;
                }
                l += 1;
            }
        }

        let [start, end] = res;
        // Check if a valid window was found
        return resLen !== Infinity ? s.substring(start, end + 1) : "";
    }
}
