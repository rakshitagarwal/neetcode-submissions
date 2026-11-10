class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        const MIN = -2147483648; // -2^31
        const MAX = 2147483647; // 2^31 - 1
        let res = 0;

        while (x !== 0) {
            // Extract the last digit
            const digit = x % 10;
            // Remove the last digit from x
            x = Math.trunc(x / 10);

            // Check for positive overflow before multiplying/adding
            if (res > MAX / 10 || (res === MAX / 10 && digit > MAX % 10)) return 0;
            // Check for negative overflow before multiplying/adding
            if (res < MIN / 10 || (res === MIN / 10 && digit < MIN % 10)) return 0;

            // Append the digit to the reversed result
            res = res * 10 + digit;
        }

        return res;
    }
}
