/*
 * @lc app=leetcode id=2966 lang=javascript
 *
 * [2966] Divide Array Into Arrays With Max Difference
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    if (nums.length === 0 || nums.length % 3 !== 0) return [];
    nums.sort((a, b) => a - b);


    const output = [];
    for (let i = 2; i < nums.length; i += 3) {
        if (nums[i] - nums[i - 2] > k) {
            return [];
        }
        output.push([nums[i - 2], nums[i - 1], nums[i]]);
    }

    return output;
};
// @lc code=end

