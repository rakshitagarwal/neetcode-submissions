/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let n = 0; // Tracks the count of visited nodes in in-order sequence
        let stack = []; // Stack to manage nodes during iterative traversal
        let curr = root; // Pointer for current node traversal

        // Traverse the BST iteratively using in-order traversal (Left -> Root -> Right)
        while (curr || stack.length > 0) {
            // Reach the leftmost node of the current subtree
            while (curr) {
                stack.push(curr);
                curr = curr.left;
            }

            // Process the current smallest node
            curr = stack.pop();
            n += 1;

            // If the current count matches k, we found the kth smallest element
            if (n === k) {
                return curr.val;
            }

            // Move to the right subtree
            curr = curr.right;
        }
    }
}
