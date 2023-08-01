/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false
    let newArray = []
    let z = x
    while (z > 0) {
        newArray.push(z % 10)
        z = Math.floor(z / 10)
    }
    let sum = 0
    for (let i = newArray.length - 1; i >= 0; i--) {
        sum = sum + newArray[i] * Math.pow(10, newArray.length - 1 - i)
    }
    if (sum == x) return true
    else return false
}

var isPalindrome = function (x) {
    x = x.toString().split('')
    for (let i = 0, j = x.length - 1; i <= j; i++, j--) {
        if (x[i] !== x[j]) return false
    }
    return true
}
