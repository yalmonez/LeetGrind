/*
 * @lc app=leetcode id=2974 lang=javascript
 *
 * [2974] Minimum Number Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0, upper = nums.length; i < upper; i +=2) {
        if (i + 1 < upper) {
            [nums[i], nums[i+1]] = [nums[i+1], nums[i]];
        }
    }
    return nums;
};
// @lc code=end

