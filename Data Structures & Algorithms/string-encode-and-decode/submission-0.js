class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for (let s of strs) {
            res += s.length + "#" + s; // 4#neet for word neet
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [], i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") j++; // find delimiter
            let length = parseInt(str.substring(i, j)); // length of word
            res.push(str.slice(j + 1, j + 1 + length)); // substring into res
            i = j + 1 + length; // move to start of next word
        }

        return res;
    }
}
