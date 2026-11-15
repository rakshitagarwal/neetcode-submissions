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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // Create a dummy node pointing to the head to handle edge cases (like removing the first node)
        let dummy = new ListNode(0, head);
        let left = dummy;
        let right = head;

        // Move the 'right' pointer 'n' steps ahead
        while (n > 0 && right !== null) {
            right = right.next;
            n -= 1;
        }

        // Move both pointers until 'right' reaches the end
        while (right !== null) {
            left = left.next;
            right = right.next;
        }

        // Delete the Nth node from the end (it's the node right after 'left')
        left.next = left.next.next;

        // Return the new head (which is dummy.next)
        return dummy.next;
    }
}
