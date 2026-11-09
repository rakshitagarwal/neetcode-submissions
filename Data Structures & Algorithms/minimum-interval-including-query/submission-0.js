class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        intervals.sort((a, b) => a[0] - b[0]); // sort on starting times

        // Min-heap to store active intervals as [size, rightEndpoint]
        const minHeap = new MinPriorityQueue((entry) => entry[0]);
        const res = {};
        let i = 0;

        // Sort queries while preserving their original order using a mapped array reference later
        const sortedQueries = [...queries].sort((a, b) => a - b);

        for (const q of sortedQueries) {
            // Push all intervals that start at or before the current query into the heap
            while (i < intervals.length && intervals[i][0] <= q) {
                const [l, r] = intervals[i];
                minHeap.enqueue([r - l + 1, r]);
                i += 1;
            }

            // Remove intervals from the heap that end before the current query (out of bounds)
            while (!minHeap.isEmpty() && minHeap.front()[1] < q) {
                minHeap.dequeue();
            }

            // The top of the heap is the smallest valid interval containing the query, or -1 if none exist
            res[q] = !minHeap.isEmpty() ? minHeap.front()[0] : -1;
        }

        // Map the computed results back to the original order of the queries array
        return queries.map((q) => res[q]);
    }
}
