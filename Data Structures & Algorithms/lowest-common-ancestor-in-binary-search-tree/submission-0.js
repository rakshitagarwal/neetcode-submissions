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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        let curr = root; // Start traversal from the root node

        while (curr) {
            // If both nodes have values greater than current, LCA lies in the right subtree
            if (p.val > curr.val && q.val > curr.val) curr = curr.right;
            // If both nodes have values smaller than current, LCA lies in the left subtree
            else if (p.val < curr.val && q.val < curr.val) curr = curr.left;
            // Otherwise, we've found the split point (the Lowest Common Ancestor)
            else return curr;
        }
    }
}
