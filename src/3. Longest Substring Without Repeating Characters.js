/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length === 0) return 0
    let max = 1
    let newLength = 1
    let start = 0
    let string = `${s[0]}`
    for (let i = 1; i < s.length; i++) {
        if (string.indexOf(s[i]) === -1) {
            string = string + s[i]
            newLength++
            max = Math.max(max, newLength)
        } else {
            let index = string.indexOf(s[i])
            start = start + index + 1
            string = s.substring(start, i + 1)
            newLength = string.length
            max = Math.max(max, newLength)
        }
    }
    return max
}
