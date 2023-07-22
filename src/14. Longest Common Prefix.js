/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let commonPrefix = new String()
    if (strs[0] === '') return commonPrefix
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) return commonPrefix
        }
        commonPrefix += `${strs[0][i]}`
        if (i === strs[0].length - 1) return commonPrefix
    }
}
