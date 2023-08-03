/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let max = 1
    let string = s[0]
    for (let i = 0; i < s.length; i++) {
        let j = i
        let k = i
        while (j < s.length && k >= 0 && s[j] === s[k]) {
            j++
            k--
        }
        if (j - k - 1 > max) {
            string = s.substring(k + 1, j)
            max = Math.max(max, j - k - 1)
        }
        let p = i
        let q = i + 1
        while (p >= 0 && q < s.length && s[p] === s[q]) {
            p--
            q++
        }
        if (q - p - 1 > max) {
            string = s.substring(p + 1, q)
            max = Math.max(max, q - p - 1)
        }
    }
    return string
}
