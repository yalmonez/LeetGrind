/*
 * @lc app=leetcode id=787 lang=javascript
 *
 * [787] Cheapest Flights Within K Stops
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    let adj = flights.reduce((acc, [src, dst, cost]) => {
        acc[src].push([dst, cost]);
        return acc;
    }, Array(n).fill([]).map(() => []));

    let priorityQueue = [[0, src, 0]];
    let distanceArray = Array(n).fill(Infinity);
    distanceArray[src] = 0;

    while (priorityQueue.length) {
        let [steps, node, currentCost] = priorityQueue.shift();
        if (steps > k) continue;
        for (let [adjNode, flightCost] of adj[node]) {
            if (currentCost + flightCost < distanceArray[adjNode] && steps <= k) {
                distanceArray[adjNode] = currentCost + flightCost;
                priorityQueue.push([steps + 1, adjNode, currentCost + flightCost]);
            }
        }
    }

    return distanceArray[dst] === Infinity ? -1 : distanceArray[dst];
};

// @lc code=end