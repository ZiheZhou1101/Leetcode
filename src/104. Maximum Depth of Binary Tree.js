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
var maxDepth = function (root) {
    if (!root) return 0
    return getDepth(root, 0)
}
var getDepth = function (node, depth) {
    if (!node) return depth
    else {
        depth = depth + 1
        let leftDepth = getDepth(node.left, depth)
        let rightDepth = getDepth(node.right, depth)
        return leftDepth > rightDepth ? leftDepth : rightDepth
    }
}
