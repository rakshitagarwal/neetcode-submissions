class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length <= 1) return false;
        let arr = s.split("");
        let stack = [];
        for (const char of arr) {
            if (char === "[" || char === "{" || char === "(") {
                stack.push(char);
            } else {
                let last = stack.pop();
                if (!last) return false
                if (last === "{" && char !== "}") return false;
                if (last === "(" && char !== ")") return false;
                if (last === "[" && char !== "]") return false;
            }
        }
        return stack.length ? false : true;
    }
}
