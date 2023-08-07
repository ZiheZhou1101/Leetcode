/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let flag = true
    if (x < 0) {
        x = x * -1
        flag = false
    }
    let result = 0
    while (x > 0) {
        result = result * 10 + (x % 10)
        x = Math.floor(x / 10)
    }
    if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) return 0
    else if (flag === true) return result
    else return result * -1
}
