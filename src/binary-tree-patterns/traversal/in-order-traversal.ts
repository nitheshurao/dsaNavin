

class Node<T> {
    value: T;
    left: Node<T> | null = null;
    right: Node<T> | null = null;

    constructor(value: T){
        this.value = value;
    }
};



function inorderTraversal<T>(root: Node<T> | null, res: T[] = []){
    if (root === null) return;

    inorderTraversal(root.left, res);
    res.push(root.value);
    inorderTraversal(root.right, res);
}


const root = new Node<number>(1);
root.left = new Node<number>(2);
root.right = new Node<number>(3);
root.left.left = new Node<number>(4);
root.left.right = new Node<number>(5);
root.right.right = new Node<number>(6);

const res: number[] = [];
inorderTraversal(root, res);
console.log(res);

export {};