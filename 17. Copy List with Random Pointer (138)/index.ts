import { _Node } from "../__types/Node";

function copyRandomList(head: _Node | null): _Node | null {

    if (!head) {
        return null;
    }

    let current = head;

    // Create a copy of each node and insert it after the original node.
    while (current) {
        let copy = new _Node(current.val);
        copy.next = current.next;
        current.next = copy;
        current = copy.next;
    }

    current = head;

    // Assign random pointers to the copied nodes.
    while (current) {
        if (current.random) {
            current.next!.random = current.random.next;
        }
        current = current.next!.next;
    }

    let original = head;
    let copy = head.next;
    let result = head.next;

    // Separate the original and copied nodes.
    while (original) {
        original.next = original.next!.next;
        copy!.next = copy!.next ? copy!.next.next : null;
        original = original.next;
        copy = copy!.next;
    }

    return result;

};

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 * 
 * 
 * The above solution has a time complexity of O(n) because in the worst case, we will have to traverse the linked list completely.
 * 
 * The space complexity is O(1) because we are using only a constant amount of space.
 * 
 * The above solution works because we are creating a copy of each node and inserting it after the original node. We then assign random pointers to the copied nodes and separate the original and copied nodes.
 * 
 * 
 * The idea behind this solution is to create a copy of each node and insert it after the original node. We then assign random pointers to the copied nodes and separate the original and copied nodes.
 * 
 * We start by iterating over the original linked list and creating a copy of each node. We insert the copied node after the original node. We then iterate over the original linked list again and assign random pointers to the copied nodes. Finally, we separate the original and copied nodes by updating the next pointers of the original and copied nodes.
 */
