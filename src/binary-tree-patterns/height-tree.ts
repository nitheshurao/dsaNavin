

class Node<T> {

    value: T;
    left: Node<T> | null = null;
    right: Node<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

// using recursion Time O(n) - space O(n) recursive stack space
function height<T>(root: Node<T> | null): number {
    if (!root) return -1;

    return 1 + Math.max(height(root.left), height(root.right))
}


// using BFS
function height2<T>(root: Node<T> | null): number {
    if (!root) return 0;

    const queue: Node<T>[] = [root];
    let depth: number = 0

    while (queue.length > 0) {
        let levelSize: number = queue.length;

        for (let i: number = 0; i < levelSize; i++) {
            let curr: Node<T> = queue.shift()!;

            if (curr.left) {
                queue.push(curr.left);
            }

            if (curr.right) {
                queue.push(curr.right);
            }
        }

        depth++;
    }
    return depth - 1;
}



//  Representation of the input tree:
//       12
//      /  \
//     8   18
//    / \
//   5   11

let root = new Node<number>(12);
root.left = new Node<number>(8);
root.right = new Node<number>(18);
root.left.left = new Node<number>(5);
root.left.right = new Node<number>(11);

console.log(height<number>(root));
console.log(height2<number>(root));

export { };