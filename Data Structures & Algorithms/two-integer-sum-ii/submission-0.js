class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0,
            right = numbers.length - 1;
        while (left < right) {
            let sum = numbers[left] + numbers[right];
            if (sum === target) return [left + 1, right + 1];
            sum < target ? left++ : right--;
        }
        return [-1, -1];
    }
}
