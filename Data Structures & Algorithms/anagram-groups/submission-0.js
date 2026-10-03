class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};
        
        for (let word of strs) {
            let temp = word
                .split("")
                .sort((a, b) => a.localeCompare(b))
                .join("");

            if (!map[temp]) map[temp] = [];
            map[temp].push(word);
        }

        return Object.values(map);
    }
}
