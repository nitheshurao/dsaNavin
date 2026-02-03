import { Heap } from '../dataStructures/heap/heap';

function largestKElements(arr: number[], k: number): number[] {

    const heap = new Heap<number>('min');

    for (let i: number = 0; i < arr.length; i++) {
        heap.insert(arr[i]);
        if (heap.size() > k) {
            heap.remove();
        }
    };
    

    const result: number[] = [];
    while (heap.size() > 0) {
        result.push(heap.remove());
    };

    return result;

}

const inp: number[] = [3, 2, 1, 5, 6, 4];
const k: number = 2;

console.log(largestKElements(inp, k));

export { };
