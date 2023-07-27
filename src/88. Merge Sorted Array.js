/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    if (n === 0) return
    if (m === 0) {
        for (let p = 0; p < n; p++) {
            nums1[p] = nums2[p]
        }
        return
    }
    let newNum1 = [...nums1]
    let nums1Index = 0
    let nums2Index = 0
    for (let j = 0; j < nums1.length; j++) {
        if (newNum1[nums1Index] <= nums2[nums2Index]) {
            nums1[j] = newNum1[nums1Index]
            if (nums1Index + 1 === m) {
                for (j = j + 1; j < nums1.length; j++) {
                    nums1[j] = nums2[nums2Index]
                    nums2Index++
                }
                return
            }
            nums1Index++
        } else {
            nums1[j] = nums2[nums2Index]
            if (nums2Index + 1 === n) {
                for (j = j + 1; j < nums1.length; j++) {
                    nums1[j] = newNum1[nums1Index]
                    nums1Index++
                }
                return
            }
            nums2Index++
        }
    }
}

var merge = function (nums1, m, nums2, n) {
    let nums1Index = m - 1
    let nums2Index = n - 1
    let i = m + n - 1
    for (i; nums2Index >= 0; i--) {
        if (nums1[nums1Index] > nums2[nums2Index]) {
            nums1[i] = nums1[nums1Index]
            nums1Index--
        } else {
            nums1[i] = nums2[nums2Index]
            nums2Index--
        }
    }
}
