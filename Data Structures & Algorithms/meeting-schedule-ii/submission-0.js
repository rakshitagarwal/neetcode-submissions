/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const starts = intervals.map((i) => i.start).sort((a, b) => a - b);
        const ends = intervals.map((i) => i.end).sort((a, b) => a - b);

        let res = 0,
            count = 0,
            s = 0,
            e = 0;
            
        while (s < intervals.length) {
            if (starts[s] < ends[e]) {
                s++;
                count++;
            } else {
                e++;
                count--;
            }
            res = Math.max(res, count);
        }

        return res;
    }
}
