

function reverseList(head: ListNode | null): ListNode | null {
    let prev = null;
    let curr = head;

    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}


/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 * 
 * The above solution has a time complexity of O(n) because in the worst case, we will have to traverse the linked list completely.
 * 
 * The space complexity is O(1) because we are using only a constant amount of space.
 * 
 * The above solution works because we are reversing the linked list by changing the direction of the pointers.
 * 
 * The idea is to keep track of the previous node and the current node. At each step, we change the direction of the current node to point to the previous node. Then we move the previous node and the current node one step forward.
 */
