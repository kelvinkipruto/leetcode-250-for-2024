import { ListNode } from "../__types/LinkedList";

function rotateRight(head: ListNode | null, k: number): ListNode | null {

    if (!head || !head.next || k === 0) {
        return head;
    }

    let current = head;
    let length = 1;

    // Find the length of the linked list.
    while (current.next) {
        current = current.next;
        length++;
    }

    // Connect the last node to the first node to form a circular linked list.
    current.next = head;

    // Find the new head and tail of the linked list.
    let newTail = head;
    let newHead = head;

    for (let i = 0; i < length - k % length - 1; i++) {
        newTail = newTail.next!;
    }

    newHead = newTail.next!;
    newTail.next = null;

    return newHead;

};


/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 * 
 * The above solution has a time complexity of O(n) because in the worst case, we will have to traverse the linked list completely.
 * 
 * The space complexity is O(1) because we are using only a constant amount of space.
 * 
 * The above solution works because we are connecting the last node to the first node to form a circular linked list. We then find the new head and tail of the linked list by traversing the linked list.
 * 
 * 
 * The idea behind this solution is to connect the last node to the first node to form a circular linked list. We then find the new head and tail of the linked list by traversing the linked list. We start by finding the length of the linked list and connecting the last node to the first node. We then find the new head and tail of the linked list by traversing the linked list. Finally, we update the next pointer of the new tail to null and return the new head of the linked list.
 * 
 * 
 */
