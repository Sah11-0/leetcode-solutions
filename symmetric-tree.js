//Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

var isSymmetric = function (root) {
    if (!root) return true;
    return isMirror(root.left, root.right);
}

function isMirror(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;

    return (left.val === right.val) &&
        isMirror(left.left, right.right) &&
        isMirror(left.right, right.left);
};