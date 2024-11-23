// Given the head of a linked list, return the list after sorting it in ascending order.

var sortList = function (head) {
    if (!head || !head.next) {
        return head;
    }

    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let secondHalf = slow.next;
    slow.next = null;

    let left = sortList(head);
    let right = sortList(secondHalf);

    return merge(left, right);
};

function merge(left, right) {
    let dummy = new ListNode();
    let current = dummy;

    while (left && right) {
        if (left.val < right.val) {
            current.next = left;
            left = left.next;
        } else {
            current.next = right;
            right = right.next;
        }
        current = current.next;
    }

    if (left) {
        current.next = left;
    } else {
        current.next = right;
    }

    return dummy.next;

};