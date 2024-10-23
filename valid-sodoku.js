// You are given a a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:

// Each row must contain the digits 1-9 without duplicates.
// Each column must contain the digits 1-9 without duplicates.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
// Return true if the Sudoku board is valid, otherwise return false

// Note: A board does not need to be full or be solvable to be valid.

class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({ length: 9 }, () => new Set());
        const cols = Array.from({ length: 9 }, () => new Set());
        const boxes = Array.from({ length: 9 }, () => new Set());

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const cell = board[r][c];

                if (cell === ".") continue;

                const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                if (rows[r].has(cell) || cols[c].has(cell) || boxes[boxIndex].has(cell)) {
                    return false;
                }

                rows[r].add(cell);
                cols[c].add(cell);
                boxes[boxIndex].add(cell);
            }
        }

        return true;
    }

}