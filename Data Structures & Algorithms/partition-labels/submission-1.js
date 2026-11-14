class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(s) {
        // Record the last index of each character in the string
        let lastIndex = new Map();
        for (let i = 0; i < s.length; i++) {
            lastIndex.set(s[i], i);
        }

        let res = [];
        let size = 0;
        let end = 0;

        // Iterate through the string again to create partitions
        for (let i = 0; i < s.length; i++) {
            // Increase the size of the current partition
            size++;
            // Update the end pointer to the farthest last index of any char seen so far
            end = Math.max(end, lastIndex.get(s[i]));

            // If the current index reaches the end of the partition...
            if (i === end) {
                // ...push the partition size to the result and reset size for the next partition
                res.push(size);
                size = 0;
            }
        }

        return res;
    }
}
