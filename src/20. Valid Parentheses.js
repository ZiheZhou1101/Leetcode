/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const sArray = Array.from(s)
    const length = sArray.length
    if (length % 2 === 1) return false
    let newArray = []
    newArray.push(sArray[0])
    for (let i = 1; i < length; i++) {
        switch (sArray[i]) {
            case '(':
                newArray.push(sArray[i])
                break
            case '[':
                newArray.push(sArray[i])
                break
            case '{':
                newArray.push(sArray[i])
                break
            case ')':
                if (newArray[newArray.length - 1] !== '(') return false
                if (newArray[newArray.length - 1] === '(') {
                    newArray.pop()
                    break
                }
            case ']':
                if (newArray[newArray.length - 1] !== '[') return false
                if (newArray[newArray.length - 1] === '[') {
                    newArray.pop()
                    break
                }
            case '}':
                if (newArray[newArray.length - 1] !== '{') return false
                if (newArray[newArray.length - 1] === '{') {
                    newArray.pop()
                    break
                }
        }
    }
    if (newArray.length > 0) return false
    if (newArray.length === 0) return true
}
