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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        // If both nodes are null, this branch is identical
        if (!p && !q) return true;

        // If one node is null or values don't match, trees are different
        if (!p || !q || p.val !== q.val) return false;

        // Recursively check both left and right subtrees
        return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    }
}
