/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length === 0) return []
    let res = []
    let table = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }
    var helper = function (cur) {
        if (cur.length === digits.length) {
            res.push(cur)
        } else {
            for (let value of table[digits[cur.length]]) {
                helper(cur + value)
            }
        }
    }
    helper('')
    return res
}
