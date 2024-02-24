/*
 * @lc app=leetcode id=2092 lang=javascript
 *
 * [2092] Find All People With Secret
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
var findAllPeople = function(n, meetings, firstPerson) {
    let timedMeetings = []; 
    let knowsSecret = new Set([0, firstPerson]);
    let timeGroups = new Set();

    meetings.sort((a, b) => a[2] - b[2]);

    for (let meeting of meetings) {
        if (!timeGroups.has(meeting[2])) {
            timeGroups.add(meeting[2]);
            timedMeetings.push([]);
        }
        timedMeetings[timedMeetings.length - 1].push([meeting[0], meeting[1]]);
    }

    for (let i = 0; i < timedMeetings.length; i++) {
        let graph = {};
        let secretGroups = new Set();
        for (let [p1, p2] of timedMeetings[i]) {
            if (!graph[p1]) graph[p1] = [];
            if (!graph[p2]) graph[p2] = [];

            graph[p1].push(p2);
            graph[p2].push(p1);
            
            if (knowsSecret.has(p1)) secretGroups.add(p1);
            if (knowsSecret.has(p2)) secretGroups.add(p2);
        }

        let queue = [...secretGroups];
        while (queue.length > 0) {
            let curr = queue.shift();
            knowsSecret.add(curr); // Add the current person to the known set.
            for (let neigh of graph[curr]) {
                if (!knowsSecret.has(neigh)) {
                    knowsSecret.add(neigh);
                    queue.push(neigh);
                }
            }
        }
    }

    return [...knowsSecret];
};
// @lc code=end

