/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    s = s.split(' ')
    if (pattern.length !== s.length) return false
    let mapP = new Map()
    let mapS = new Map()
    for (let i = 0, j = 0; i < pattern.length, j < s.length; i++, j++) {
        if (mapP.has(pattern[i])) {
            if (s[j] !== mapP.get(pattern[i])) return false
        } else if (mapS.has(s[j])) return false
        else {
            mapP.set(pattern[i], s[j])
            mapS.set(s[j], pattern[i])
        }
    }
    return true
}
