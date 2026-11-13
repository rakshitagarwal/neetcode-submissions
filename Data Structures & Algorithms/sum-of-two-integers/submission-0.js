class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        // Loop until there is no carry left
        while (b !== 0) {
            // Calculate the carry bits (where both bits are 1, shifted left by 1)
            let carry = (a & b) << 1;

            // Add a and b without considering the carry using XOR
            a = a ^ b;

            // Assign the carry to b so it can be added in the next iteration
            b = carry;
        }

        // When b is 0, a holds the final sum
        return a;
    }
}
