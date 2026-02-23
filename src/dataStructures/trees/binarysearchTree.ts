

export class BinarySearchTree<T> {

    private NodeClass = class Node {
        value: T
        left: Node | null = null
        right: Node | null = null

        constructor(value: T) {
            this.value = value;
        }
    }

    private root: InstanceType<typeof this.NodeClass> | null = null;

    private insert(arr: T[]) {

        let index: number = 1;
        let currentNode: InstanceType<typeof this.NodeClass> | null = this.root;

        while (index < arr.length) {
            if (!currentNode) break;
            if (arr[index] < currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = new this.NodeClass(arr[index]);
                    index += 1;
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                if (currentNode.right === null) {
                    currentNode.right = new this.NodeClass(arr[index]);
                    index += 1;
                }else {
                    currentNode = currentNode.right;
                }
            }
        }

    }

    constructor(arr: T[]) {
        this.root = new this.NodeClass(arr[0]);
        this.insert(arr);
    }

}


const input: number[] = [2, 5, 10, 9, 6, 3, 4];
const tree = new BinarySearchTree<number>(input);
