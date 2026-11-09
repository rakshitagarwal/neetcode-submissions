class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if (intervals.length === 0) return [];

        intervals.sort((a, b) => a[0] - b[0]); // sort on starting of interval
        const output = [];
        output.push(intervals[0]);

        for (const interval of intervals) {
            const start = interval[0]; // Get current interval start
            const end = interval[1]; // Get current interval end
            const lastEnd = output[output.length - 1][1]; // Get end time of the last merged interval

            if (start <= lastEnd) {
                output[output.length - 1][1] = Math.max(lastEnd, end); // Merge overlapping intervals by extending the end time
            } else {
                output.push([start, end]); // Add non-overlapping interval as a new entry
            }
        }
        return output;
    }
}
