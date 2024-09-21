// Given a binary tree, determine if it is height-balanced.

var isBalanced = function (root) {
    var getHeight = function (node) {
        if (node === null) return 0;

        let leftHeight = getHeight(node.left);
        if (leftHeight === -1) return -1;
        let rightHeight = getHeight(node.right);
        if (rightHeight === -1) return -1;

        let heightDiff = Math.abs(leftHeight - rightHeight);
        if (heightDiff > 1) {
            return -1;
        } else {
            return 1 + Math.max(leftHeight, rightHeight);
        }
    }

    return getHeight(root) !== -1;
};