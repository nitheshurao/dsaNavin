import { Heap } from "../dataStructures/heap/heap";

function smallestKElement(arr: number[], k: number): number[] {

    const heap = new Heap<number>('max');

    for (let i: number = 0; i < arr.length; i++) {
        heap.insert(arr[i]);
        if (heap.size() > k) {
            heap.remove();
        }
    };

    const result: number[] = [];

    while (heap.size() > 0) {
        result.push(heap.remove())
    };

    return result;
};


const inp: number[] = [23, 4, 5, 2, 67, 1, 4, 6];
const k: number = 2;
console.log(smallestKElement(inp, k));
export { };