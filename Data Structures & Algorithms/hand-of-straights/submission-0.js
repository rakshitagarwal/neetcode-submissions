class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        // 1. If the total cards can't be evenly divided into groups, return false
        if (hand.length % groupSize !== 0) {
            return false;
        }

        // 2. Count the frequency of each card
        const count = new Map();
        for (let n of hand) {
            count.set(n, (count.get(n) || 0) + 1);
        }

        // 3. Get unique cards and sort them in ascending order
        // (This replaces the need for a min-heap in JS)
        const minH = Array.from(count.keys()).sort((a, b) => a - b);

        // Use a pointer to track the current smallest card
        let pointer = 0;

        while (pointer < minH.length) {
            // Get the smallest available card
            let first = minH[pointer];

            // 4. Try to form a group starting from 'first'
            for (let i = first; i < first + groupSize; i++) {
                // If the required card doesn't exist in our count map, we fail
                if (!count.has(i)) {
                    return false;
                }

                // Decrement the count of the card
                count.set(i, count.get(i) - 1);

                // If a card is fully used up...
                if (count.get(i) === 0) {
                    // If the card we just used up is NOT the current smallest card,
                    // it means we left a "hole" in a group, which is invalid.
                    if (i !== minH[pointer]) {
                        return false;
                    }
                    // Move the pointer to the next smallest available card
                    pointer++;
                }
            }
        }

        return true;
    }
}
