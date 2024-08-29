// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode(0);
    let head = dummy;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            dummy.next = list1;
            list1 = list1.next;
        } else {
            dummy.next = list2;
            list2 = list2.next;
        }
        dummy = dummy.next;
    }
    dummy.next = list1 !== null ? list1 : list2;

    return head.next;
};