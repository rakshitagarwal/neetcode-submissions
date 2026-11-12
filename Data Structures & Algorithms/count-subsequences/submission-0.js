class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        const cache = new Map();

        const dfs = (i, j) => {
            // If we matched all characters of t, we found a valid subsequence
            if (j === t.length) return 1;

            // If s is exhausted before t, it's not a valid subsequence
            if (i === s.length) return 0;

            const key = `${i},${j}`;
            if (cache.has(key)) return cache.get(key);

            // If characters match, we can either include this character from s or skip it
            if (s[i] === t[j]) cache.set(key, dfs(i + 1, j + 1) + dfs(i + 1, j));
            // If they don't match, we must skip the character from s
            else cache.set(key, dfs(i + 1, j));

            return cache.get(key);
        };

        return dfs(0, 0);
    }
}
