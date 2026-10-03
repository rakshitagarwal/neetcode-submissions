class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let allowed = "abcdefghijklmnopqrstuvwxyz0123456789";
        let arr = s
            .split("")
            .map((char) => char.toLowerCase())
            .filter((char) => allowed.includes(char))
        let left = 0,
            right = arr.length - 1;
        while (left <= right) {
            if (arr[left] !== arr[right]) return false;
            left++;
            right--;
        }
        return true;
    }
}
