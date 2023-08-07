/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode()
    let newList = dummy
    newList.next = head
    let count = 0
    while (head) {
        count++
        head = head.next
    }
    let index = count - n + 1
    for (let i = 0; i < index; i++) {
        if (i === index - 1) {
            newList.next = newList.next.next
        }
        newList = newList.next
    }
    return dummy.next
}
