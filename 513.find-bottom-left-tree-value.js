/*
 * @lc app=leetcode id=513 lang=javascript
 *
 * [513] Find Bottom Left Tree Value
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
var findBottomLeftValue = function(root) {
    if (!root) return;

    const queue = [];
    queue.push(root);
    let output = 0;

    while(queue.length > 0) {
        const node = queue.shift();
        output = node.val;
        if (node.right) queue.push(node.right);
        if (node.left) queue.push(node.left);
    }
    return output;
};
// @lc code=end

