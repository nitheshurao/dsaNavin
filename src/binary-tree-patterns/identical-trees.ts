

class Node<T> {
    value: T;
    left: Node<T> | null = null;
    right: Node<T> | null = null;

    constructor(val: T) {
        this.value = val;
    }
}

type NodeType<T> = Node<T> | null;

// DFS
function checkIdentical<T>(root1: NodeType<T>, root2: NodeType<T>): boolean {
    if (root1 === null && root2 === null) return true;

    if (root1 === null || root2 === null) return false;

    return (root1.value === root2.value && checkIdentical(root1.left, root2.left) && checkIdentical(root1.right, root2.right));
}

// level order traversal
function checkIdentical2<T>(root1: NodeType<T> | null, root2: NodeType<T> | null): boolean {
    if (root1 === null && root2 === null) return true;

    if (root1 === null || root2 === null) return false;

    const queue1: Node<T>[] = [root1]
    const queue2: Node<T>[] = [root2]

    if (queue1.length !== queue2.length) return false;

    while (queue1.length > 0 && queue2.length > 0) {

        const curr1: Node<T> = queue1.shift()!;
        const curr2: Node<T> = queue2.shift()!;

        if (curr1.value !== curr2.value) return false;

        if (!!curr1.left !== !!curr2.left) return false;
        if (!!curr1.right !== !!curr2.right) return false;

        if (curr1.left) {
            queue1.push(curr1.left);
            queue2.push(curr2.left!);
        }

        if (curr1.right) {
            queue1.push(curr1.right);
            queue2.push(curr2.right!);
        }

    }
    return queue1.length === queue2.length;
}


const root1 = new Node<number>(1);
root1.left = new Node<number>(2);
root1.right = new Node<number>(3);
root1.left.left = new Node<number>(4);

const root2 = new Node<number>(1);
root2.left = new Node<number>(2);
root2.right = new Node<number>(3);
root2.left.left = new Node<number>(4);

console.log(checkIdentical(root1, root2));
console.log(checkIdentical2(root1, root2));

export { };
