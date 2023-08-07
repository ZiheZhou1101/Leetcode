/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let res = []
    var backTrack = function (string, open, close) {
        if (open === close && open === n) {
            res.push(string)
        } else if (n > 0 && (open === close) === 0) backTrack('(', 1, 0)
        else if (open === close && open < n)
            backTrack(string + '(', open + 1, close)
        else if (open === n && close < n)
            backTrack(string + ')', open, close + 1)
        else {
            backTrack(string + '(', open + 1, close)
            backTrack(string + ')', open, close + 1)
        }
    }
    backTrack('', 0, 0)
    return res
}
