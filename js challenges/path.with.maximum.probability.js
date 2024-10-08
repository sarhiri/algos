// You are given an undirected weighted graph of n nodes (0-indexed), represented by an edge list where edges[i] = [a, b] is an undirected edge connecting the nodes a and b with a probability of success of traversing that edge succProb[i].

// Given two nodes start and end, find the path with the maximum probability of success to go from start to end and return its success probability.

// If there is no path from start to end, return 0. Your answer will be accepted if it differs from the correct answer by at most 1e-5.

 

// Example 1:
// Input: n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.2], start = 0, end = 2
// Output: 0.25000
// Explanation: There are two paths from start to end, one having a probability of success = 0.2 and the other has 0.5 * 0.5 = 0.25.

// Example 2:
// Input: n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.3], start = 0, end = 2
// Output: 0.30000

// Example 3:
// Input: n = 3, edges = [[0,1]], succProb = [0.5], start = 0, end = 2
// Output: 0.00000
// Explanation: There is no path between 0 and 2.

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, start_node, end_node) {
  const graph = new Map();
 
 // Create the graph representation
 for (let i = 0; i < edges.length; i++) {
     const [a, b] = edges[i];
     const prob = succProb[i];
     if (!graph.has(a)) graph.set(a, []);
     if (!graph.has(b)) graph.set(b, []);
     graph.get(a).push([b, prob]);
     graph.get(b).push([a, prob]);
 }

 // Priority queue to store the node and its probability
 const pq = new MaxPriorityQueue({ priority: x => x[1] });
 pq.enqueue([start_node, 1]);
 
 // Initialize the max probability map
 const maxProb = Array(n).fill(0);
 maxProb[start_node] = 1;

 while (!pq.isEmpty()) {
     const [node, prob] = pq.dequeue().element;

     if (node === end_node) {
         return prob;
     }
     
     for (const [neighbor, edgeProb] of graph.get(node) || []) {
         const newProb = prob * edgeProb;
         if (newProb > maxProb[neighbor]) {
             maxProb[neighbor] = newProb;
             pq.enqueue([neighbor, newProb]);
         }
     }
 }
 
 return 0;
};