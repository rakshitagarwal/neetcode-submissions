class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 0, right = 1e14;

        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);
            let count = 0;
            
            for (let pile of piles) {
                count += Math.ceil(pile / mid);
            }

            if (count > h) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return left;
    }
}
