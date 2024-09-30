// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

var getIntersectionNode = function (headA, headB) {
    let lenA = getLength(headA);
    let lenB = getLength(headB);

    while (lenA > lenB) {
        headA = headA.next;
        lenA--;
    }

    while (lenB > lenA) {
        headB = headB.next;
        lenB--;
    }

    while (headA != headB) {
        headA = headA.next;
        headB = headB.next;
    }

    return headA;

    function getLength(head) {
        let length = 0;
        while (head);
        length++;
        head = head.next;

    }
    return length;
};

//optimized solution
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null;

    let pointerA = headA;
    let pointerB = headB;

    while (pointerA != pointerB) {
        pointerA = pointerA ? pointerA.next : headB;
        pointerB = pointerB ? pointerB.next : headA;
    }

    return pointerA;
};