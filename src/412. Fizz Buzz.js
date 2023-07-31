/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let array = []
    for (let i = 0; i < n; i++) {
        if ((i + 1) % 15 === 0) {
            array.push('FizzBuzz')
            continue
        } else if ((i + 1) % 3 === 0) {
            array.push('Fizz')
            continue
        } else if ((i + 1) % 5 === 0) {
            array.push('Buzz')
            continue
        } else array.push(`${i + 1}`)
    }
    return array
}
