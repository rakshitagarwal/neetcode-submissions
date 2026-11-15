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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        if (!head || !head.next) return;

        // Find middle
        let slow = head;
        let fast = head.next;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Reverse second half
        let second = slow.next;
        let prev = null;
        slow.next = null; // Break the link between first and second half

        while (second) {
            let tmp = second.next;
            second.next = prev;
            prev = second;
            second = tmp;
        }

        // Merge two halves
        let first = head;
        second = prev; // In JS, we assign the reversed head back to 'second'

        while (second) {
            let tmp1 = first.next;
            let tmp2 = second.next;

            first.next = second;
            second.next = tmp1;

            first = tmp1;
            second = tmp2;
        }
    }
}
