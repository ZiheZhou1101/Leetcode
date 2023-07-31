/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let sum = ((nums.length + 1) * nums.length) / 2
    console.log(sum)
    for (let i = 0; i < nums.length; i++) {
        sum = sum - nums[i]
    }
    return sum
}
/* var missingNumber = function (nums) {
    let sum = ((nums.length + 1) * nums.length) / 2
    console.log(sum)
    for (let i = 0; i < nums.length; i++) {
        sum = sum - nums[i]
    }
    return sum
} */
