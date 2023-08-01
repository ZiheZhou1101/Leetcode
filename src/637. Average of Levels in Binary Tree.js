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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    let res = []
    let queue = [root]
    while (queue.length > 0) {
        let temp = []
        let size = queue.length
        for (let i = 0; i < size; i++) {
            let currentNode = queue.shift()
            temp.push(currentNode.val)
            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right)
        }
        res.push(temp)
    }
    for (let i = 0; i < res.length; i++) {
        let sum = 0
        for (let j = 0; j < res[i].length; j++) {
            sum = sum + res[i][j]
        }
        res[i] = sum / res[i].length
    }
    return res
}
