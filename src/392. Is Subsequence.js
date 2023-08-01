/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (s.length === 0) return true
    for (let i = 0, j = 0; i < s.length, j < t.length; j++) {
        if (s.charAt(i) === t.charAt(j)) {
            i++
        }
        if (i === s.length) return true
    }
    return false
}
