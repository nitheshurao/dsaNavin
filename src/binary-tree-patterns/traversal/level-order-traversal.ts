
class Node<T> {
    value: T;
    left: Node<T> | null = null;
    right: Node<T> | null = null;

    constructor(val: T) {
        this.value = val;
    }
}

function levelOrderRec<T>(root: Node<T> | null = null, level: number, res: T[][] = []) {

    if (root === null) return;

    if (res.length <= level) {
        res.push([]);
    }

    res[level].push(root.value);

    levelOrderRec<T>(root.left, level + 1, res);
    levelOrderRec<T>(root.right, level + 1, res);
};


function levelOrder<T>(root: Node<T> | null = null) {

    if (root === null) return [];

    const q: Node<T>[] = [root];
    const res: T[][] = [];
    let currentLevel = 0;

    while (q.length > 0) {
        let length: number = q.length;
        res.push([]);


        for (let i: number = 0; i < length; i++) {
            const curr: Node<T> = q.shift()!;
            res[currentLevel].push(curr.value);

            if (curr.left !== null) {
                q.push(curr.left)
            };
            if (curr.right !== null) {
                q.push(curr.right);
            }
        }
        currentLevel++;
    }
    return res;
}

const root = new Node<number>(5);
root.left = new Node<number>(12);
root.right = new Node<number>(13);

root.left.left = new Node<number>(7);
root.left.right = new Node<number>(14);

root.right.right = new Node<number>(2);

root.left.left.left = new Node<number>(17);
root.left.left.right = new Node<number>(23);

root.left.right.left = new Node<number>(27);
root.left.right.right = new Node<number>(3);

root.right.right.left = new Node<number>(8);
root.right.right.right = new Node<number>(11);

const res: number[][] = [];
levelOrderRec(root, 0, res);
console.log(res);

const out: number[][] = levelOrder(root);
console.log(out);


export { };