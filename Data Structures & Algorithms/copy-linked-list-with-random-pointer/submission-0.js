// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return null;

        // Use a Map to keep track of visited nodes and their copies
        let oldToCopy = new Map();
        // In JS, we explicitly set null to null (though getting a missing key returns undefined,
        // setting it ensures the map contains the key)
        oldToCopy.set(null, null);

        let cur = head;
        // First pass: create a copy of each node and store it in the map
        while (cur !== null) {
            let copy = new Node(cur.val);
            oldToCopy.set(cur, copy);
            cur = cur.next;
        }

        cur = head;
        // Second pass: connect the next and random pointers for the copied nodes
        while (cur !== null) {
            let copy = oldToCopy.get(cur);
            copy.next = oldToCopy.get(cur.next);
            copy.random = oldToCopy.get(cur.random);
            cur = cur.next;
        }

        // Return the copied head node
        return oldToCopy.get(head);
    }
}
