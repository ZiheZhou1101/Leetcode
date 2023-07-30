/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let barrel = new Object()
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in barrel) {
            barrel[nums[i]]++
            if (barrel[nums[i]] > nums.length / 2) {
                return nums[i]
            }
        } else if (nums.length === 1) return nums[0]
        else barrel[nums[i]] = 1
    }
}
