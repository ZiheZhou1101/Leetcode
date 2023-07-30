/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    let sum = 0
    for (let i = columnTitle.length - 1; i >= 0; i--) {
        sum +=
            (columnTitle[i].charCodeAt() - 64) *
            Math.pow(26, columnTitle.length - i - 1)
    }
    return sum
}
