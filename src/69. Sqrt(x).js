/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x === 0 || x === 1) return x
    let left = 0
    let right = x
    while (true) {
        let mid = Math.floor((left + right) / 2)
        if (mid * mid === x) return mid
        if (mid * mid > x) {
            if (mid - left <= 1) return left
            right = mid
            continue
        }
        if (mid * mid < x) {
            if (right - mid <= 1) return mid
            left = mid
            continue
        }
    }
}
