class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0,
            right = height.length - 1,
            leftMax = 0,
            rightMax = 0,
            water = 0;

        while (left < right) {
            if (height[left] > leftMax) leftMax = height[left];
            if (height[right] > rightMax) rightMax = height[right];

            if (height[left] > height[right]) {
                water += rightMax - height[right];
                right--;
            } else {
                water += leftMax - height[left];
                left++;
            }
        }
        
        return water;
    }
}
