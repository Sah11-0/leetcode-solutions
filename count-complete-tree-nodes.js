// Given the root of a complete binary tree, return the number of the nodes in the tree.

var countNodes = function (root) {
    if (!root) return 0;

    function getLeftHeight(node) {
        let height = 0;
        while (node) {
            height++;
            node = node.left;
        }
        return height;
    }

    function getRightHeight(node) {
        let height = 0;
        while (node) {
            height++;
            node = node.right;
        }
        return height;
    }

    const leftHeight = getLeftHeight(root);
    const rightHeight = getRightHeight(root);

    if (leftHeight === rightHeight) {
        return Math.pow(2, leftHeight) - 1;
    } else {
        return 1 + countNodes(root.left) + countNodes(root.right);
    }
};
