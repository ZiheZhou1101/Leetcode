/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let length = nums.length
    let sum = 0
    for (let i = 0; i < length; i++) {
        if (nums[i] === 0) sum++
        else nums.push(nums[i])
    }
    for (let j = 0; j < sum; j++) {
        nums.push(0)
    }
    nums.splice(0, length)
}
