/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let maxDistance = 0;
    function traversalDFS(node) {
        if (!node) return 0;

        const leftestLeaf = traversalDFS(node.left);
        const rightestLeaf = traversalDFS(node.right);

        maxDistance = maxDistance < leftestLeaf + rightestLeaf ? leftestLeaf + rightestLeaf : maxDistance;
        return 1 + Math.max(rightestLeaf, leftestLeaf);
    }

    traversalDFS(root);
    return maxDistance
};
// @lc code=end

