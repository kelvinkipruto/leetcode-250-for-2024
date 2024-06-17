import { ListNode } from "../__types/LinkedList";


function hasCycle(head: ListNode | null): boolean {
    if (!head) {
        return false;
    }

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;

};

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 * 
 * The above solution has a time complexity of O(n) because in the worst case, we will have to traverse the linked list completely.
 * 
 * The space complexity is O(1) because we are using only a constant amount of space.
 * 
 * The above solution works because we are using the two-pointer approach to detect a cycle in the linked list.
 * 
 * The idea behind this solution is to use the two-pointer approach to detect a cycle in the linked list. We have two pointers, slow and fast, that start at the head of the linked list. The slow pointer moves one step at a time, while the fast pointer moves two steps at a time. If there is a cycle in the linked list, the two pointers will eventually meet at some point.
 */
