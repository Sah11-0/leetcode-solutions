//Given the root of a binary tree, return the preorder traversal of its nodes' values.

//recursive solution
var preorderTraversal = function (root) {
    let result = [];

    function traverse(node) {
        if (!node) return;
        result.push(node.val);
        traverse(node.left);
        traverse(node.right);
    }

    traverse(root);
    return result;
};


//iterative solution
var preorderTraversal = function (root) {
    if (!root) return [];

    let result = [];
    let stack = [root];

    while (stack.length > 0) {
        let node = stack.pop();
        result.push(node.val);

        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    return result;
};