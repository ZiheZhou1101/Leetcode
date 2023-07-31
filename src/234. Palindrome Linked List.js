/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let newArray = []
    while (head) {
        newArray.push(head.val)
        head = head.next
    }
    for (let i = 0; i < newArray.length / 2; i++) {
        if (newArray[i] !== newArray[newArray.length - 1 - i]) return false
    }
    return true
}
