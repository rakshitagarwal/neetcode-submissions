class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let output = [];
        // Simulating collections.deque() using an array and a head index for efficiency
        let q = [];
        let head = 0; // Replaces Python's q.popleft()
        let l = 0,
            r = 0;

        while (r < nums.length) {
            // pop smaller values from q
            // We compare the value at the tail of the deque (q[q.length - 1]) with the current value
            while (q.length > head && nums[q[q.length - 1]] < nums[r]) {
                q.pop();
            }
            q.push(r);

            // remove left val from window
            // If the index at the head of the deque is out of the current window bounds
            if (l > q[head]) {
                head++; // simulates q.popleft()
            }

            if (r + 1 >= k) {
                output.push(nums[q[head]]);
                l += 1;
            }
            r += 1;
        }

        return output;
    }
}
