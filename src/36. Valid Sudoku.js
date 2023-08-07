/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let row = Array.from({ length: 9 }, () => [])
    let col = Array.from({ length: 9 }, () => [])
    let squ = Array.from({ length: 9 }, () => [])
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let index = Math.floor(i / 3) * 3 + Math.floor(j / 3)
            if (board[i][j] === '.') continue
            else if (
                row[i].includes(board[i][j]) ||
                col[j].includes(board[i][j]) ||
                squ[index].includes(board[i][j])
            )
                return false
            else {
                row[i].push(board[i][j])
                col[j].push(board[i][j])
                squ[index].push(board[i][j])
            }
        }
    }
    return true
}
