//Given the head of a singly linked list, reverse the list, and return the reversed list.

var reverseList = function (head) {
    let previous = null;
    let current = head;
    let next = head;

    while (current != null) {
        next = current.next
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous;
};