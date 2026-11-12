class Solution {
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    isMatch(s, p) {
        const cache = new Map();

        const dfs = (i, j) => {
            const key = `${i},${j}`;
            if (cache.has(key)) return cache.get(key);

            // Base cases
            if (i >= s.length && j >= p.length) return true;
            if (j >= p.length) return false;

            // Check if current characters match
            const match = i < s.length && (s[i] === p[j] || p[j] === ".");

            // Check for '*' wildcard
            if (j + 1 < p.length && p[j + 1] === "*") {
                const res = dfs(i, j + 2) || (match && dfs(i + 1, j));
                cache.set(key, res);
                return res;
            }

            // Normal match
            if (match) {
                const res = dfs(i + 1, j + 1);
                cache.set(key, res);
                return res;
            }

            // No match
            cache.set(key, false);
            return false;
        };

        return dfs(0, 0);
    }
}
