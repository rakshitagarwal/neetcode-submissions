class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let res = 0;

        for (let i = 0; i < 32; i++) {
            // 1. Extract the i-th bit from the right
            const bit = (n >>> i) & 1;

            // 2. Place the bit at the (31 - i)-th position from the right
            res = res | (bit << (31 - i));
        }

        // 3. Return as an unsigned 32-bit integer
        return res >>> 0;
    }
}
