/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    if (n < 1) return false
    let logResult = Math.log(n) / Math.log(3)
    return Math.abs(logResult - Math.round(logResult)) < 1e-10
}
