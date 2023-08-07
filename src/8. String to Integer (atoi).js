/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    const str = s.trim().split(' ')[0]
    let num = parseInt(str, 10)
    if (isNaN(num)) {
        return 0
    }
    if (num < Math.pow(-2, 31)) {
        return Math.pow(-2, 31)
    }
    if (num > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1
    }
    return num
}
