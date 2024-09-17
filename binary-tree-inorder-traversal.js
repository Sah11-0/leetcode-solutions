//Given the root of a binary tree, return the inorder traversal of its nodes' values.

var inorderTraversal = function (root) {
    const stack = [];
    const result = [];
    let currentNode = root;

    while (currentNode || stack.length) {
        while (currentNode) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        }
        const node = stack.pop();
        result.push(node.val);
        currentNode = node.right;
    }
    return result;
};