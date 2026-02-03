import { Heap } from "../dataStructures/heap/heap";

function compareFn(a: number[], b: number[]) {
    const distanceA: number = a[0] ** 2 + a[1] ** 2;
    const distanceB: number = b[0] ** 2 + b[1] ** 2;

    if (distanceA === distanceB) return -1;

    return distanceB - distanceA;
}


function closesPointOfOrigin(arr: number[][], k: number): number[][] {
    const heap = new Heap<number[]>('max', compareFn);

    for (let i: number = 0; i < arr.length; i++) {
        heap.insert(arr[i]);
        if (heap.size() > k) {
            heap.remove();
        }
    }

    const result: number[][] = [];

    while (heap.size() > 0) {
        result.push(heap.remove());
    }

    return result;
}



const points: number[][] = [[1, 3], [-2, 2], [2, -2]];
const k: number = 2;
console.log(closesPointOfOrigin(points, k));
export { };