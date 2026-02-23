
class Node<T> {
    value: T;
    left: Node<T> | null = null;
    right: Node<T> | null = null;

    constructor(val: T) {
        this.value = val;
    }
};



function preOrder<T>(root: Node<T> | null, res: T[] = []){
    if(root === null) return;

    res.push(root.value);
    preOrder(root.left, res);
    preOrder(root.right, res);
}



const root = new Node<number>(1);
root.left = new Node<number>(2);
root.right = new Node<number>(3);
root.left.left = new Node<number>(4);
root.left.right = new Node<number>(5);
root.right.right = new Node<number>(6);
root.right.left = new Node<number>(7);

const res: number[] = [];
preOrder<number>(root, res);
console.log(res);

export { };
