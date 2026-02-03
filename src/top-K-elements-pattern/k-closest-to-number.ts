import { Heap } from "../dataStructures/heap/heap";

function compareFunction(a: number[], b: number[]): number {
    if (a[1] !== b[1]) return b[1] - a[1];
    return -1;
}

function closestOne(arr: number[], k: number, x: number): number[] {

    const heap = new Heap<number[]>("max", compareFunction);

    for (let i: number = 0; i < arr.length; i++) {
        heap.insert([arr[i], Math.abs(arr[i] - x)]);
        if (heap.size() > k) {
            heap.remove();
        }
    }


    const result: number[] = [];
    while (heap.size() > 0) {
        result.push(heap.remove()[0]);
    };

    return result.sort((a, b) => a - b);
}



const inp: number[] = [1, 2, 3, 4, 5];
const k: number = 4;
const x: number = 3;

console.log(closestOne(inp, k, x))

export { };