class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        // Step 1: Count the frequency of each task
        let count = new Array(26).fill(0);
        for (let task of tasks) {
            count[task.charCodeAt(0) - "A".charCodeAt(0)]++;
        }

        // Step 2: Use a max heap to store task frequencies
        let maxHeap = new MaxPriorityQueue();
        for (let i = 0; i < 26; i++) {
            if (count[i] > 0) maxHeap.push(count[i]);
        }

        let time = 0;
        let q = new Queue(); // Queue to hold tasks waiting for cooldown: [remaining_count, available_time]

        // Step 3: Simulate each time interval until all tasks and queue elements are processed
        while (maxHeap.size() > 0 || q.size() > 0) {
            time++;
            // Process the most frequent available task
            if (maxHeap.size() > 0) {
                let cnt = maxHeap.pop() - 1;
                if (cnt !== 0) {
                    q.push([cnt, time + n]); // Push back with its cooldown expiration time
                }
            }

            // Check if any task in the cooldown queue has finished waiting
            if (q.size() > 0 && q.front()[1] === time) {
                maxHeap.push(q.pop()[0]);
            }
        }

        return time;
    }
}
