class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val ?? 0;
        this.next = next ?? null;
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummy = new ListNode();
    let current = dummy;
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    current.next = list1 ?? list2;
    return dummy.next;
};

/**
 * The above solution has a time complexity of O(n + m) and a space complexity of O(1).
 * 
 * The time complexity is O(n + m) because we iterate over both lists once to merge them. The time complexity of this solution is O(n + m) because we iterate over both lists once to merge them. The space complexity is O(1) because we use a constant amount of space to store the merged list. The size of this list does not depend on the size of the input lists, so the space complexity is O(1).
 * 
 * The idea behind this solution is to use a dummy node to keep track of the head of the merged list. We then iterate over both lists and compare the values of the nodes at the current position. We add the smaller node to the merged list and move the pointer to the next node in the list.
 * 
 * We continue this process until we reach the end of one of the lists. We then add the remaining nodes from the other list to the merged list. We return the head of the merged list, which is the next node of the dummy node.
 * 
 * This solution is efficient because it uses a two-pointer approach to merge two sorted lists into a single sorted list.
 * 
 * 
 */


