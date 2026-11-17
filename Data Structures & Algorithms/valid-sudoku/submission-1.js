class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let map = {},
            tmp = 0;

        // Iterate through every cell in the 9x9 board
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                tmp = board[i][j];

                // Skip empty cells represented by '.'
                if (tmp === ".") continue;

                // Check if the current digit already exists in the current row, column, or 3x3 sub-box
                if (
                    map["i" + i + tmp] ||
                    map["j" + j + tmp] ||
                    map["b" + Math.floor(i / 3) + Math.floor(j / 3) + tmp]
                )
                    return false;

                // Record the presence of the digit in the respective row, column, and sub-box
                map["i" + i + tmp] = 1;
                map["j" + j + tmp] = 1;
                map["b" + Math.floor(i / 3) + Math.floor(j / 3) + tmp] = 1;
            }
        }

        return true;
    }
}
