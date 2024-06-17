import { ListNode } from "../__types/LinkedList";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {

    let dummy = new ListNode(0);
    dummy.next = head;

    let slow = dummy;
    let fast = dummy;

    for (let i = 0; i <= n; i++) {
        fast = fast.next!;
    }

    while (fast) {
        slow = slow.next!;
        fast = fast.next!;
    }

    slow.next = slow.next!.next;

    return dummy.next;

};

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 * 
 * The above solution has a time complexity of O(n) because in the worst case, we will have to traverse the linked list completely.
 * 
 * The space complexity is O(1) because we are using only a constant amount of space.
 * 
 * The above solution works because we are using the two-pointer approach to remove the nth node from the end of the linked list.
 * 
 * The idea behind this solution is to use the two-pointer approach to remove the nth node from the end of the linked list. We have two pointers, slow and fast, that start at the head of the linked list. The fast pointer moves n steps ahead of the slow pointer. When the fast pointer reaches the end of the linked list, the slow pointer will be pointing to the node just before the nth node from the end. We can then remove the nth node by updating the next pointer of the slow pointer.
 */
