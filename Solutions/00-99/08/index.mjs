import TreeNode from "../../TreeNode.mjs";

function countUnivalSubtrees(root) {
    let count = 0;

    function isUnival(node) {
        if (!node) {
            return true; // An empty subtree is considered unival
        }
        const leftUnival = isUnival(node.left);
        const rightUnival = isUnival(node.right);

        if (leftUnival && rightUnival) {
            if (
                (node.left && node.left.val !== node.val) ||
                (node.right && node.right.val !== node.val)
            ) {
                return false; // If the left or right child has a different value, the current subtree is not unival
            }

            count++; // Increment the count if the current subtree is unival
            return true;
        }

        return false;
    }

    isUnival(root);
    return count;
}

// Example usage:
const root = new TreeNode(0);
root.left = new TreeNode(1);
root.right = new TreeNode(0);
root.right.left = new TreeNode(1);
root.right.right = new TreeNode(0);
root.right.left.left = new TreeNode(1);
root.right.left.right = new TreeNode(1);

console.log(countUnivalSubtrees(root)); // Output: 5