class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        // 1. Calculate total gas and total cost to check if a solution is even possible
        let totalGas = 0;
        let totalCost = 0;

        for (let i = 0; i < gas.length; i++) {
            totalGas += gas[i];
            totalCost += cost[i];
        }

        // If total gas is less than total cost, we can't complete the circuit
        if (totalGas < totalCost) {
            return -1;
        }

        // 2. Find the valid starting station
        let total = 0; // Tracks the current gas surplus/deficit
        let res = 0; // Tracks the candidate starting station

        for (let i = 0; i < gas.length; i++) {
            // Update the running surplus
            total += gas[i] - cost[i];

            // If we drop below zero, this means we can't reach station i+1 from our current start
            if (total < 0) {
                // Reset the surplus and set the next station as the new candidate start
                total = 0;
                res = i + 1;
            }
        }

        // Return the valid starting index (guaranteed to exist since totalGas >= totalCost)
        return res;
    }
}
