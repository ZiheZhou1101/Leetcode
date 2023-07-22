/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const roman = Array.from(s)
    let result = 0
    while (roman.length > 0) {
        if (roman[0] === 'I' && roman[1] === 'V') {
            result = result + 4
            roman.splice(0, 2)
            continue
        } else if (roman[0] === 'I' && roman[1] === 'X') {
            result = result + 9
            roman.splice(0, 2)
            continue
        } else if (roman[0] === 'X' && roman[1] === 'L') {
            result = result + 40
            roman.splice(0, 2)
            continue
        } else if (roman[0] === 'X' && roman[1] === 'C') {
            result = result + 90
            roman.splice(0, 2)
            continue
        } else if (roman[0] === 'C' && roman[1] === 'D') {
            result = result + 400
            roman.splice(0, 2)
            continue
        } else if (roman[0] === 'C' && roman[1] === 'M') {
            result = result + 900
            roman.splice(0, 2)
            continue
        } else if (roman[0] === 'C' && roman[1] === 'M') {
            result = result + 900
            roman.splice(0, 2)
            continue
        } else if (roman[0] === 'M') {
            result = result + 1000
            roman.splice(0, 1)
            continue
        } else if (roman[0] === 'D') {
            result = result + 500
            roman.splice(0, 1)
            continue
        } else if (roman[0] === 'C') {
            result = result + 100
            roman.splice(0, 1)
            continue
        } else if (roman[0] === 'L') {
            result = result + 50
            roman.splice(0, 1)
            continue
        } else if (roman[0] === 'X') {
            result = result + 10
            roman.splice(0, 1)
            continue
        } else if (roman[0] === 'V') {
            result = result + 5
            roman.splice(0, 1)
            continue
        } else if (roman[0] === 'I') {
            result = result + 1
            roman.splice(0, 1)
            continue
        }
    }
    return result
}
