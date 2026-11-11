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
     * @return {TreeNode}
     */
    invertTree(root) {
        // Base case: if the tree is empty, return null
        if (!root) return null;

        // Swap the left and right children
        let temp = root.left;
        root.left = root.right;
        root.right = temp;

        // Recursively invert the subtrees
        this.invertTree(root.left);
        this.invertTree(root.right);

        return root;
    }
}
