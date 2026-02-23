

class Node<T> {
    value: T;
    left: Node<T> | null = null;
    right: Node<T> | null = null;

    constructor(val: T) {
        this.value = val;
    }
}


function postOrder<T>(root: Node<T> | null, res: T[] = []) {
    if (root === null) return;

    postOrder<T>(root.left, res);
    postOrder<T>(root.right, res);
    res.push(root.value);
}


const root = new Node<number>(1);
root.left = new Node<number>(2);
root.right = new Node<number>(3);
root.left.left = new Node<number>(4);
root.left.right = new Node<number>(5);
root.right.right = new Node<number>(6);
root.right.left = new Node<number>(7);

const res: number[] = [];

postOrder<number>(root, res);
console.log(res);

export { };