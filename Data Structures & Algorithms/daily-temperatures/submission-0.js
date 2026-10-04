class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [];
        const res = new Array(temperatures.length).fill(0);

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
                let last = stack.pop();
                res[last] = i - last;
            }
            stack.push(i);
        }

        return res;
    }
}
