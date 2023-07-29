/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let barrel = new Object()
    for (i = 0; i < nums.length; i++) {
        if (nums[i] in barrel) {
            delete barrel[nums[i]]
        } else {
            barrel[nums[i]] = 0
        }
    }
    return Number(Object.keys(barrel))
}

/* Concept of XOR:
XOR of zero and some bit returns that bit i.e. x^0 = x...
XOR of two same bits returns 0 i.e. x^x = 0...
And, x^y^x = (x^x)^y = 0^y = y...
XOR all bits together to find the unique number. */

/* var singleNumber = function (nums) {
    // Initialize the unique number...
    let uniqNum = 0
    // TRaverse all elements through the loop...
    for (let idx = 0; idx < nums.length; idx++) {
        // Concept of XOR...
        uniqNum = uniqNum ^ nums[idx]
    }
    return uniqNum // Return the unique number...
} */
