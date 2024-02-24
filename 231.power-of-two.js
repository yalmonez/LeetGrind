/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return n === 0 ? false : Math.floor(Math.log2(n)) === Math.ceil(Math.log2(n));
};
// @lc code=end

