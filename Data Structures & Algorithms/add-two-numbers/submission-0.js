/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode(0);
        let cur = dummy;

        let carry = 0;
        // In JS, null is falsy, so this works just like Python's None
        while (l1 !== null || l2 !== null || carry !== 0) {
            // Python's ternary `l1.val if l1 else 0` translates to `l1 ? l1.val : 0`
            let v1 = l1 ? l1.val : 0;
            let v2 = l2 ? l2.val : 0;

            // new digit
            let val = v1 + v2 + carry;
            // Math.floor replaces Python's integer division //
            carry = Math.floor(val / 10);
            val = val % 10;
            cur.next = new ListNode(val);

            // update ptrs
            cur = cur.next;
            // Using optional chaining (?.) is the cleanest way to translate `l1.next if l1 else None`
            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }

        return dummy.next;
    }
}
