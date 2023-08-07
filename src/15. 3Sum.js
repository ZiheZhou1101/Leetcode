/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = []
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (i >= 1 && nums[i] === nums[i - 1]) continue
        let j = i + 1
        let k = nums.length - 1
        while (j < k) {
            let threeSum = nums[i] + nums[j] + nums[k]
            if (threeSum > 0) {
                k--
            }
            if (threeSum < 0) {
                j++
            }
            if (threeSum === 0) {
                res.push([nums[i], nums[j], nums[k]])
                j++
                k--
                while (nums[j] === nums[j - 1] && j < k) j++
                while (nums[k] === nums[k + 1] && j < k) k--
            }
        }
    }
    return res
}
