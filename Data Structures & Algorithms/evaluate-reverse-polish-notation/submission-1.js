class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for (let op of tokens) {
            if (op === "+" || op === "-" || op === "*" || op === "/") {
                let right = stack.pop();
                let left = stack.pop();
                let res;
                switch (op) {
                    case "+":
                        res = left + right;
                        break;
                    case "-":
                        res = left - right;
                        break;
                    case "*":
                        res = left * right;
                        break;
                    case "/":
                        res = left / right;
                        break;
                }
                stack.push(Math.trunc(res));
            } else {
                stack.push(+op);
            }
        }
        return stack[0];
    }
}
