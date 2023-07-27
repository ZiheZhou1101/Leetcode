/**
 * @param {number} n
 * @return {number}
 */

function factorial(n) {
    if (n === 0) return 1
    else {
        return n * factorial(n - 1)
    }
}

var climbStairs = function (n) {
    let number = Math.floor(n / 2)
    let sum = 0
    for (let i = 0; i <= number; i++) {
        sum += factorial(n - i) / (factorial(i) * factorial(n - 2 * i))
    }
    return sum
}
