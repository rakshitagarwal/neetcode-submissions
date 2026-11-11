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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        // If subRoot is null, it's always a valid subtree
        if (!subRoot) return true;
        // If root becomes null but subRoot still exists, it's not a subtree
        if (!root) return false;

        // Helper function to check if two trees are identical in structure and values
        function isSameTree(p, q) {
            if (!p && !q) return true; // Both nodes are null (reached the end)
            if (!p || !q || p.val !== q.val) return false; // One is null or values don't match
            // Recursively check both left and right subtrees
            return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
        }

        // If the current node matches the subRoot, check if the trees are identical
        if (isSameTree(root, subRoot)) return true;

        // Otherwise, recursively search in the left and right subtrees of root
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }
}
