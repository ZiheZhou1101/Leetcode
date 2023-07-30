/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    if (n === 1) return true
    let res = n
    let set = new Set()
    while (res !== 1) {
        res = add(res)
        if (res === 1) return true
        else if (set.has(res)) return false
        else {
            set.add(res)
        }
    }
}
var add = function (x) {
    let sumRes = 0
    while (x) {
        sumRes += (x % 10) * (x % 10)
        x = Math.floor(x / 10)
    }
    return sumRes
}
