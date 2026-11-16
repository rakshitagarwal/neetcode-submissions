class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        let top = 0;
        let bot = ROWS - 1;

        // 1. Find the correct row using Binary Search
        while (top <= bot) {
            // Python's // (floor division) is Math.floor() in JS
            let row = Math.floor((top + bot) / 2);

            // matrix[row][-1] gets the last element in JS too
            if (target > matrix[row][matrix[row].length - 1]) {
                top = row + 1;
            } else if (target < matrix[row][0]) {
                bot = row - 1;
            } else {
                break;
            }
        }

        // If the row pointers crossed, the target is not in the matrix
        if (!(top <= bot)) {
            return false;
        }

        // 2. Find the target in the specific row
        let row = Math.floor((top + bot) / 2);
        let l = 0;
        let r = COLS - 1;

        while (l <= r) {
            let m = Math.floor((l + r) / 2);

            if (target > matrix[row][m]) {
                l = m + 1;
            } else if (target < matrix[row][m]) {
                // Fixed from the image which repeated the '>' condition
                r = m - 1;
            } else {
                return true;
            }
        }

        return false;
    }
}
