/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode()
    let res = dummy
    let helper = 0
    while (l1 || l2) {
        let sum = helper
        if (l1) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }
        helper = Math.floor(sum / 10)
        res.next = new ListNode(sum % 10)
        res = res.next
    }
    if (helper !== 0) {
        res.next = new ListNode(helper)
    }
    return dummy.next
}
