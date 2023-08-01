/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    const num1 = BigInt(`0b${a}`)
    const num2 = BigInt(`0b${b}`)
    const sum = (num1 + num2).toString(2)
    return sum
}
