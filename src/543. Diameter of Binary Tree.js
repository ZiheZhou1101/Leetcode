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
var diameterOfBinaryTree = function (root) {
    let max = 0
    var searchTree = function (root) {
        if (!root) return
        max = Math.max(max, 2 + getDepth(root.left) + getDepth(root.right))
        searchTree(root.left)
        searchTree(root.right)
    }
    var getDepth = function (node) {
        if (!node) return -1
        else {
            let left = getDepth(node.left)
            let right = getDepth(node.right)
            return 1 + Math.max(left, right)
        }
    }
    searchTree(root)
    return max
}

/* var diameterOfBinaryTree = function (root) {
    let max = 0
    var searchTree = function (root) {
        if (!root) return -1
        else {
            let left = searchTree(root.left)
            let right = searchTree(root.right)
            max = Math.max(max, 2 + left + right)
            return 1 + Math.max(left, right)
        }
    }
    searchTree(root)
    return max
} */
