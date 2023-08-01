/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false
    let mapS = new Map()
    let mapT = new Map()
    for (let i = 0, j = 0; i < s.length, j < t.length; i++, j++) {
        if (mapS.has(s[i])) {
            if (t[j] !== mapS.get(s[i])) return false
        } else if (mapT.has(t[j])) return false
        else {
            mapS.set(s[i], t[j])
            mapT.set(t[j], s[i])
        }
    }
    return true
}
