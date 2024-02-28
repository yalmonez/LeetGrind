/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const translator = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000,
    }

    sum = 0;
    for(let i = 0; i < s.length-1; i+=1){
        translator[s[i]] < translator[s[i+1]] ? sum -= translator[s[i]]: sum += translator[s[i]]
    }
    return sum + translator[s[s.length-1]];
};
// @lc code=end

