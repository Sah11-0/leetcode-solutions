// Given the root of a binary tree, return the postorder traversal of its nodes' values.

var postorderTraversal = function (root) {
    let result = [];

    function traverse(node) {
        if (!node) return;
        traverse(node.left);
        traverse(node.right);
        result.push(node.val);
    }

    traverse(root);
    return result;
};