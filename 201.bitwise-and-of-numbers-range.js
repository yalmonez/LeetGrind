/*
 * @lc app=leetcode id=201 lang=javascript
 *
 * [201] Bitwise AND of Numbers Range
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
    if (right === left) return right
    for (var i = 0; left != right; left >>= 1, right >>= 1, i++);
    return left << i
};
// @lc code=end

