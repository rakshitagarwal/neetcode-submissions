class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        // Use a Set to keep track of which target indices we have matched (0, 1, or 2)
        let good = new Set();

        for (let t of triplets) {
            // If ANY value in the triplet is strictly greater than the target's value at the same index,
            // it's useless because we can only take the maximum. We can never decrease a value.
            if (t[0] > target[0] || t[1] > target[1] || t[2] > target[2]) {
                continue;
            }

            // If the triplet is valid, check if its values match the target values
            for (let i = 0; i < t.length; i++) {
                if (t[i] === target[i]) {
                    // If it matches, record the index
                    good.add(i);
                }
            }
        }

        // If we found matches for all three indices, we can merge them to form the target
        return good.size === 3;
    }
}
