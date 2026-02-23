import { BinaryTree, NodeType } from "../dataStructures/trees/tree";

function preOrder<T>(root: NodeType<T> | null): T[] {
    if (!root) return [];

    return [
        root.value,
        ...preOrder(root.left),
        ...preOrder(root.right)
    ]
};

function inOrder<T>(root: NodeType<T> | null): T[] {
    if (!root) return [];

    return [
        ...inOrder(root.left),
        root.value,
        ...inOrder(root.right)
    ];
}

function postOrder<T>(root: NodeType<T> | null): T[] {
    if (!root) return [];

    return [
        ...postOrder(root.left),
        ...postOrder(root.right),
        root.value
    ];
}

function countTotalNodes<T>(root: NodeType<T> | null): number{
    if (!root) return 0;

    return 1 + countTotalNodes(root.left) + countTotalNodes(root.right);
}



const arr = [1, 2, 3, 4, 5];
const tree = new BinaryTree<number>(arr);
tree.display();
console.log('\npreOrder ->  ', preOrder<number>(tree.root()));
console.log('inOrder ->  ', inOrder<number>(tree.root()));
console.log('postOrder ->  ', postOrder<number>(tree.root()));
console.log('\ntotal Nodes ->  ', countTotalNodes<number>(tree.root()));
export { };
