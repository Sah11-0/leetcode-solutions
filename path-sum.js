// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

function hasPathSum(root, targetSum) {
    if (root === null) return false;

    if (root.left === null && root.right === null && targetSum === root.val) {
        return true;
    }

    targetSum -= root.val;

    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};
