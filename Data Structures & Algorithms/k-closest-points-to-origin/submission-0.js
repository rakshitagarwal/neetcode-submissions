class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        // Initialize a min-priority queue to store points ordered by their squared Euclidean distance
        const minHeap = new MinPriorityQueue((point) => point[0]);
        const res = [];

        // Calculate the squared Euclidean distance for each point and push it into the min-heap
        for (const [x, y] of points) {
            const dist = x ** 2 + y ** 2;
            minHeap.enqueue([dist, x, y]);
        }

        // Extract the k closest points from the top of the heap
        for (let i = 0; i < k; i++) {
            const [_, x, y] = minHeap.dequeue();
            res.push([x, y]);
        }

        return res;
    }
}
