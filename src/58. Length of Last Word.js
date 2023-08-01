/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    while (s[s.length - 1] === ' ') {
        s = s.slice(0, -1)
    }
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ') return s.length - i - 1
    }
    return s.length
}
