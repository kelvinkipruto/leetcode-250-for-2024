import { ListNode } from "../__types/LinkedList";

function partition(head: ListNode | null, x: number): ListNode | null {

    let lessThan = new ListNode(0);
    let greaterThan = new ListNode(0);
    let lessThanHead = lessThan;
    let greaterThanHead = greaterThan;

    while (head) {

        if (head.val < x) {
            lessThan.next = head;
            lessThan = lessThan.next;
        } else {
            greaterThan.next = head;
            greaterThan = greaterThan.next;
        }

        head = head.next;
    }

    greaterThan.next = null;
    lessThan.next = greaterThanHead.next;

    return lessThanHead.next;
};

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 * 
 * The above solution has a time complexity of O(n) because in the worst case, we will have to traverse the linked list completely.
 * 
 * The space complexity is O(1) because we are using only a constant amount of space.
 * 
 * The above solution works because we are creating two separate linked lists, one for nodes less than x and one for nodes greater than or equal to x. We then merge the two linked lists and return the result.
 * 
 * 
 * The idea behind this solution is to create two separate linked lists, one for nodes less than x and one for nodes greater than or equal to x. We then merge the two linked lists and return the result.
 * 
 * We start by creating two dummy nodes to store the nodes less than x and greater than or equal to x. We then iterate over the linked list and add the nodes to the appropriate linked list. Finally, we merge the two linked lists and return the result.
 * 
 */
