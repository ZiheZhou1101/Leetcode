/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let stack = []
    let dummy = new ListNode()
    let newList = dummy
    while (head) {
        stack.push(head.val)
        head = head.next
    }
    while (stack.length !== 0) {
        newList.next = new ListNode(stack.pop())
        newList = newList.next
    }
    return dummy.next
}
