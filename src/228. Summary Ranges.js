/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if (nums.length === 0) return []
    if (nums.length === 1) return [`${nums[0]}`]
    let empty = []
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1] + 1) empty.push(i)
    }
    if (empty.length === 0) return [`${nums[0]}->${nums[nums.length - 1]}`]
    let res = []
    for (let j = 0; j <= empty.length; j++) {
        if (j === 0 && empty[j] > 1)
            res.push(`${nums[0]}->${nums[empty[j] - 1]}`)
        else if (j === 0 && empty[j] === 1) res.push(`${nums[0]}`)
        else if (
            j === empty.length &&
            empty[empty.length - 1] === nums.length - 1
        )
            res.push(`${nums[nums.length - 1]}`)
        else if (
            j === empty.length &&
            empty[empty.length - 1] < nums.length - 1
        )
            res.push(
                `${nums[empty[empty.length - 1]]}->${nums[nums.length - 1]}`,
            )
        else if (empty[j] === empty[j - 1] + 1)
            res.push(`${nums[empty[j - 1]]}`)
        else if (empty[j] > empty[j - 1] + 1)
            res.push(`${nums[empty[j - 1]]}->${nums[empty[j] - 1]}`)
    }
    return res
}

/* var summaryRanges = function (nums) {
    const output = []
    let idx = 0
    while (idx < nums.length) {
        let beg, last
        beg = nums[idx]
        while (idx + 1 < nums.length && nums[idx + 1] == nums[idx] + 1) idx++
        last = nums[idx]
        if (beg == last) output.push(beg + '')
        else output.push(beg + '->' + last)
        idx++
    }
    return output
} */
