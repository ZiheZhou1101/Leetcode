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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) return true
    let left = root.left
    let right = root.right
    return isSame(left, right)
}
var isSame = function (left, right) {
    if (left === null && right === null) return true
    if (left && right && left.val === right.val)
        return isSame(left.left, right.right) && isSame(left.right, right.left)
    else return false
}
