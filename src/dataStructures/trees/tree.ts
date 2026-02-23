
export type NodeType<T> = {
    value: T;
    left: NodeType<T> | null;
    right: NodeType<T> | null;
}

export class BinaryTree<T> {

    private classNode = class Node {
        left: Node | null = null;
        right: Node | null = null;
        value: T

        constructor(value: T) {
            this.value = value;
        }
    };

    private rootNode: InstanceType<typeof this.classNode> | null;

    private _populate(values: T[], index: number, node: InstanceType<typeof this.classNode>) {
        const leftIndex: number = 2 * index + 1;
        const rightIndex: number = 2 * index + 2;

        if (leftIndex < values.length && values[leftIndex] !== null) {
            node.left = new this.classNode(values[leftIndex]);
            this._populate(values, leftIndex, node.left);
        }


        if (rightIndex < values.length && values[rightIndex] !== null) {
            node.right = new this.classNode(values[rightIndex]);
            this._populate(values, rightIndex, node.right);
        }
    }

    private height(node: InstanceType<typeof this.classNode> | null): number {
        if (!node) return 0;
        return 1 + Math.max(this.height(node.left), this.height(node.right));
    }

    constructor(values: T[]) {
        this.rootNode = new this.classNode(values[0]);
        this._populate(values, 0, this.rootNode);
    }

    display(): void {
        if (!this.rootNode) return;
        const height = this.height(this.rootNode);
        const maxWidth = Math.pow(2, height - 1);

        let queue: Array<InstanceType<typeof this.classNode> | null> = [this.rootNode];

        for (let level: number = 0; level < height; level++) {
            const levelSize = queue.length;
            const gap = Math.floor(maxWidth / Math.pow(2, level + 1));

            let line = "";
            const nextQueue: Array<InstanceType<typeof this.classNode> | null> = [];

            for (let i: number = 0; i < levelSize; i++) {
                const node = queue.shift()!;
                line += " ".repeat(gap);
                if (node) {
                    line += node.value;
                    nextQueue.push(node.left, node.right);
                } else {
                    line += " ";
                    nextQueue.push(null, null);
                }
                line += " ".repeat(gap + 1);
            }

            console.log(line.trimEnd());
            queue = nextQueue;
        }
    }

    root () {
        return this.rootNode;
    }
}

export class BinarySearchTree<T> {

    private classNode = class Node {
        left: Node | null = null;
        right: Node | null = null;
        value: T;

        constructor(value: T) {
            this.value = value;
        };
    }

    private rootNode: InstanceType<typeof this.classNode> | null = null;

    private _populate(values: T[]) {
        let index = 1;
        let node = this.rootNode!;
        while (index < values.length) {
            if (values[index] <= node.value) {
                if (node.left === null) {
                    node.left = new this.classNode(values[index]);
                    index += 1;
                    node = this.rootNode!;
                    continue;
                } else {
                    node = node.left;
                }
            } else {
                if (node.right === null) {
                    node.right = new this.classNode(values[index]);
                    index += 1;
                    node = this.rootNode!;
                    continue;
                }
                node = node.right;
            }
        }
    }

    private height(node: InstanceType<typeof this.classNode> | null): number {
        if (!node) return 0;
        return 1 + Math.max(this.height(node.left), this.height(node.right));
    };

    constructor(values: T[]) {
        this.rootNode = new this.classNode(values[0]);
        this._populate(values);
    }

    display(): void {
        if (!this.rootNode) return;
        const height = this.height(this.rootNode);
        const maxWidth = Math.pow(2, height - 1);

        let queue: Array<InstanceType<typeof this.classNode> | null> = [this.rootNode];

        for (let level: number = 0; level < height; level++) {
            const levelSize = queue.length;
            const gap = Math.floor(maxWidth / Math.pow(2, level + 1));

            let line = "";
            const nextQueue: Array<InstanceType<typeof this.classNode> | null> = [];

            for (let i: number = 0; i < levelSize; i++) {
                const node = queue.shift()!;
                line += " ".repeat(gap);
                if (node) {
                    line += node.value;
                    nextQueue.push(node.left, node.right);
                } else {
                    line += " ";
                    nextQueue.push(null, null);
                }
                line += " ".repeat(gap + 1);
            }

            console.log(line.trimEnd());
            queue = nextQueue;
        }
    }

}


if (require.main === module) {

    const arr: number[] = [3, 5, 2, 5, 2, 6, 3, 6];
    const tree = new BinaryTree<number>(arr);
    const BTree = new BinarySearchTree<number>(arr);
    // tree.display();
    BTree.display();

}


/**
 * Properties of Trees
 * Size - Total number of nodes
 * Child - sub branch of a particular node
 * Parent - if a node has sub branch
 * Siblings - two nodes comes under a same node then they are called siblings
 * Edge - The line connected to two nodes
 * Height -Maximum Number of Edges from the node you are checking to the leaf
 * Leaf Nodes - Nodes doesnt have childern
 * Level - Subtract height of root - height of node (root level is always 0)
 * Ancestors and Decendent
 * Degree => how many child a node have. Degree of the three is the max child we have in one node
 */

/**
 * Types of Binary Tree
 * 1. Complete Binary Tree - All levels should be full and last level from left to right
 * 2. Full BT / Strict BT - Either 0 or 2 childern (used in compression)
 * 3. Perfect BT - All levels are full
 * 4. Height Balanced BT - Avg height is O(log n)
 * 5. Skewed BT - Every node have only 1 child. So heigh is O(n)
 * 6. Orderd BT - Every node has some property or condition
 */

/**
 * Interview Tips
 * 1. Perfect BT if Height = h then Total number of nodes = 2 **(h + 1) - 1;
 * 2. Total number of Leaf nodes in perfect BT is 2 ** h
 * 3. N number of leaves then log(N+1) levels atleast
 * 4. N number of nodes then log(N+1) min levels.
 * 5. In strict BT N number of leaf nodes then how much internal nodes are there. N-1 => Number of leaf nodes = Number of internal nodes + 1
 */

