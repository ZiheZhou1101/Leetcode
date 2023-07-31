/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    let barrel = new Object()
    for (let i = 0; i < s.length; i++) {
        if (s[i] in barrel) {
            barrel[s[i]]++
        } else barrel[s[i]] = 1
    }
    for (let j = 0; j < t.length; j++) {
        if (t[j] in barrel) {
            if (barrel[t[j]] === 0) return false
            else barrel[t[j]]--
        } else return false
    }
    return true
}
