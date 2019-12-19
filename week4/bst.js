class BSTNode {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    size(node=this.root) {
        if(node === null) {
            return 0;
        }
        return 1 + this.size(node.left) + this.size(node.right);
    }
    contains(value, node=this.root) {
        if(node === null) {
            return false;
        }
        if(node.value === value) {
            return true;
        }
        // go left?
        if(value < node.value) {
            return this.contains(value, node.left);
        } else {
            return this.contains(value, node.right);
        }
    }
    add(value, node=this.root) {
        // is the root empty?
        if(this.root == null) {
            this.root = new BSTNode(value);
            return;
        }
        // which direction?
        if(value >= node.value) {
            // we look right!
            // is there a node there!
            if(node.right !== null) {
                // descend into tree, recursively
                return this.add(value, node.right);
            }
            else {
                // we make the node, attach to right
                node.right = new BSTNode(value);
            }
        }
        else {
            // we look left!
            if(node.left !== null) {
                // descend into tree, recursively
                return this.add(value, node.left);
            }
            else {
                // we make the node, attach to left
                node.left = new BSTNode(value);
            }
        }

    }
}
var tree = new BST();
tree.add(10);
tree.add(5.1);
tree.add(25);
// does this tree have a 10?
console.log(tree.contains(5.1));
console.log(tree.size());