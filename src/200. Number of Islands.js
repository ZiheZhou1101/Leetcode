/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const m = grid.length
    const n = grid[0].length
    let sum = 0
    var check = function (i, j) {
        if (i < 0 || j < 0 || i > m - 1 || j > n - 1 || grid[i][j] === '0')
            return
        else {
            grid[i][j] = '0'
            check(i + 1, j)
            check(i - 1, j)
            check(i, j + 1)
            check(i, j - 1)
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                sum++
                check(i, j)
            }
        }
    }
    return sum
}
