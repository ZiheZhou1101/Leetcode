/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            let first = mid
            let last = mid
            while (nums[first] === target) {
                first--
            }
            while (nums[last] === target) {
                last++
            }
            return [first + 1, last - 1]
        } else if (nums[mid] < target) {
            left = mid + 1
            continue
        } else if (nums[mid] > target) {
            right = mid - 1
            continue
        }
    }
    return [-1, -1]
}
