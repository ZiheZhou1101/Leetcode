/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
    let sorted = []
    var search = function (root) {
        if (!root) return
        search(root.left)
        sorted.push(root.val)
        search(root.right)
    }
    search(root)
    let difference = Math.abs(sorted[1] - sorted[0])
    for (let i = 0, j = 1; i < sorted.length - 1, j < sorted.length; i++, j++) {
        difference = Math.min(difference, Math.abs(sorted[i] - sorted[j]))
    }
    return difference
}
