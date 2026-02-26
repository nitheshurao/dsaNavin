

class Node<T> {
    value: T;
    left: Node<T> | null = null;
    right: Node<T> | null = null;

    constructor(val: T) {
        this.value = val;
    }
};


// O(n) time and O(1) space
function morisTraversalInorder<T>(root: Node<T> | null): T[] {

    const res: T[] = []
    let curr = root;

    while (curr !== null) {
        if (curr.left !== null) {
            let predecessor = curr.left;
            while (predecessor.right !== null && predecessor.right !== curr) {
                predecessor = predecessor.right;
            }

            if (predecessor.right == null) {
                predecessor.right = curr;
                curr = curr.left;
            } else {
                res.push(curr.value);
                predecessor.right = null;
                curr = curr.right;
            }
        } else {
            res.push(curr.value);
            curr = curr.right;
        }
    }


    return res;
}



const root = new Node<number>(1);
root.left = new Node<number>(2);
root.right = new Node<number>(3);
root.left.left = new Node<number>(4);
root.left.right = new Node<number>(5);
root.right.right = new Node<number>(6);
root.right.left = new Node<number>(7);

const response = morisTraversalInorder<number>(root);
console.log(response);

export { };