import { ListNode } from "../__types/LinkedList";

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 || l2 || carry) {

        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);
        current = current.next;

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

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
 * The above solution works because we are adding the corresponding nodes of the two linked lists and keeping track of the carry.
 * 
 * 
 * The idea behind this solution is to add the corresponding nodes of the two linked lists and keep track of the carry. We start by creating a dummy node to store the result. We then iterate over the two linked lists and add the corresponding nodes along with the carry. We update the carry and create a new node with the sum % 10. We then update the current pointer and move to the next nodes in the linked lists. We continue this process until we reach the end of both linked lists and the carry is 0. Finally, we return the next node of the dummy node, which contains the result.
 * 
 */
