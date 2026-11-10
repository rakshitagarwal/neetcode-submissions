class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const minHeap = new MinPriorityQueue();

        for (let num of nums) {
            // Push each number into the heap
            minHeap.push(num);

            // If the heap size exceeds k, remove the smallest element
            if (minHeap.size() > k) {
                minHeap.pop();
            }
        }

        // The root of the min-heap now holds the kth largest element
        return minHeap.front();
    }
}
