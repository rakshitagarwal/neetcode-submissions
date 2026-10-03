class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0,
            right = heights.length - 1,
            maxarea = 0;
        while (left < right) {
            let height = Math.min(heights[left], heights[right]);
            let area = height * (right - left);
            maxarea = Math.max(area, maxarea);
            heights[left] < heights[right] ? left++ : right--;
        }
        return maxarea;
    }
}
