/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let res = [[1]]
    if (numRows === 1) return res
    for (let i = 1; i < numRows; i++) {
        let newRow = [1]
        for (let j = 0; j < i - 1; j++) {
            newRow.push(res[i - 1][j] + res[i - 1][j + 1])
        }
        newRow.push(1)
        res.push(newRow)
    }
    return res
}
