/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    let result = 0
    let flag = true
    if (dividend > 0 && divisor < 0) flag = false
    if (dividend < 0 && divisor > 0) flag = false
    dividend = Math.abs(dividend, 0)
    divisor = Math.abs(divisor, 0)
    while (dividend >= divisor) {
        result++
        dividend -= divisor
    }
    if (flag === true) return result
    else return result * -1
}
