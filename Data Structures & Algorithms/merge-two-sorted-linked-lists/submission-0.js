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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(l1, l2) {
        // Create a dummy node to serve as the start of the merged list
        let dummy = new ListNode(0);
        let tail = dummy;

        // Iterate while both lists have nodes
        while (l1 !== null && l2 !== null) {
            if (l1.val < l2.val) {
                tail.next = l1;
                l1 = l1.next;
            } else {
                tail.next = l2;
                l2 = l2.next;
            }
            // Move the tail pointer forward
            tail = tail.next;
        }

        // If one list is exhausted, attach the remaining nodes of the other list
        if (l1 !== null) {
            tail.next = l1;
        } else if (l2 !== null) {
            tail.next = l2;
        }

        // The merged list starts after the dummy node
        return dummy.next;
    }
}
