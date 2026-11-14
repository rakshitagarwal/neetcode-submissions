class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        // Initialize left and right pointers to the boundaries of the matrix
        let l = 0;
        let r = matrix.length - 1;

        // Loop until the pointers meet in the center
        while (l < r) {
            // Iterate through the current layer/ring
            for (let i = 0; i < r - l; i++) {
                let top = l;
                let bottom = r;

                // Save the top-left element
                let topLeft = matrix[top][l + i];

                // Move bottom-left into top-left
                matrix[top][l + i] = matrix[bottom - i][l];

                // Move bottom-right into bottom-left
                matrix[bottom - i][l] = matrix[bottom][r - i];

                // Move top-right into bottom-right
                matrix[bottom][r - i] = matrix[top + i][r];

                // Move the saved top-left into top-right
                matrix[top + i][r] = topLeft;
            }
            // Shrink the boundaries inward for the next inner layer
            r -= 1;
            l += 1;
        }
    }
}
