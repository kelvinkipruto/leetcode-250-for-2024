
import { ListNode } from "../__types/LinkedList";

function isPalindrome(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    slow = reverse(slow);
    fast = head;

    while (slow) {
        if (slow.val !== fast!.val) {
            return false;
        }
        slow = slow.next;
        fast = fast!.next;
    }

    return true;

};

function reverse(head: ListNode | null): ListNode | null {
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


/*
Time complexity: O(n)
Space complexity: O(1)

The above solution has a time complexity of O(n) because in the worst case, we will have to traverse the linked list completely.

The space complexity is O(1) because we are using only a constant amount of space.

The above solution works because we are reversing the second half of the linked list and then comparing it with the first half. If both the halves are the same, then the linked list is a palindrome.

The idea behind this solution is to use the two-pointer approach to find the middle of the linked list. We then reverse the second half of the linked list and compare it with the first half. If both the halves are the same, then the linked list is a palindrome.


*/
