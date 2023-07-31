/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let barrel = new Object()
    for (let i = 0; i < s.length; i++) {
        if (s[i] in barrel) {
            barrel[s[i]]++
        } else barrel[s[i]] = 1
    }
    for (let j = 0; j < s.length; j++) {
        if (barrel[s[j]] === 1) return j
    }
    return -1
}
/* var firstUniqChar = function(s) {
    for (let idx = 0; idx < s.length; idx++){
           if(s.indexOf(s[idx]) === s.lastIndexOf(s[idx])){
               return idx
           }
       }
       return -1  
    }; */
