class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        // leftMin and leftMax track the range of possible open parentheses counts
        let leftMin = 0;
        let leftMax = 0;

        for (let c of s) {
            if (c === "(") {
                // For an opening bracket, both min and max open counts increase
                leftMin += 1;
                leftMax += 1;
            } else if (c === ")") {
                // For a closing bracket, both min and max open counts decrease
                leftMin -= 1;
                leftMax -= 1;
            } else {
                // For a wildcard '*', it can be empty (min stays - 1),
                // or an opening bracket (max + 1)
                leftMin -= 1;
                leftMax += 1;
            }

            // If the maximum possible open parentheses is negative,
            // we have too many closing brackets and can't recover
            if (leftMax < 0) {
                return false;
            }

            // The minimum open count can't be negative (we can't have negative open brackets).
            // We reset it to 0 because a '*' could have been treated as empty instead of a closing bracket.
            if (leftMin < 0) {
                leftMin = 0;
            }
        }

        // The string is valid only if we can end with exactly 0 open parentheses
        return leftMin === 0;
    }
}
