/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = []

    var helper = function (unUsed, updated) {
        if (unUsed.size === 0) {
            result.push(updated)
            return
        } else {
            for (let num of unUsed) {
                let updatedSet = new Set(unUsed)
                updatedSet.delete(num)
                helper(updatedSet, [...updated, num])
            }
        }
    }

    helper(new Set(nums), [])
    return result
}
