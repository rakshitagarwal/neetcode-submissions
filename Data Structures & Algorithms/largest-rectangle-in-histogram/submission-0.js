class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = [],
            maxArea = 0;
            heights.push(0)
            
        for (let i = 0; i <= heights.length; i++) {

            while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
                let height = heights[stack.pop()];
                let width = stack.length ? i - stack[stack.length - 1] - 1 : i;
                maxArea = Math.max(maxArea, height * width);
            }
            stack.push(i)
        }

        return maxArea;
    }
}
