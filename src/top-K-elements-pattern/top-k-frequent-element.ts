import { Heap } from "../dataStructures/heap/heap";

function compareFunction(a: number[], b: number[]): number {
    return a[0] - b[0];
}

function findKELement(nums: number[], k: number) {
    const hashMap = new Map<number, number>();

    for (let i: number = 0; i < nums.length; i++) {
        hashMap.set(nums[i], (hashMap.get(nums[i]) || 0) + 1);
    };

    const heap = new Heap<number[]>('min', compareFunction);

    for (let [num, freq] of hashMap) {
        heap.insert([freq, num]);
        if (heap.size() > k) {
            heap.remove();
        };
    };

    let topKElements: number[] = [];

    while(heap.size() > 0) {
        topKElements.push(heap.remove()[1]);
    };

    return topKElements;
}


const inp: number[] = [1];
const k: number = 2;
console.log(findKELement(inp, k));
export { };