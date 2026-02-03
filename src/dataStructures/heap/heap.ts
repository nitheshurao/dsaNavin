
type ModeType = 'min' | 'max';

export class Heap<T> {
    private heap: T[];
    private compare: (a: T, b: T) => number;

    constructor(mode: ModeType = 'min', compareFn?: (a: T, b: T) => number) {
        this.heap = [];
        this.compare = compareFn
            ? compareFn
            : mode === 'min'
                ? (a, b) => (a as any) - (b as any)
                : (a, b) => (b as any) - (a as any);
    };

    private parent(index: number): number {
        return Math.floor((index - 1) / 2);
    };

    private left(index: number): number {
        return Math.floor(2 * index + 1);
    };

    private right(index: number): number {
        return Math.floor(2 * index + 2);
    };

    private swap(left: number, right: number): void {
        [this.heap[left], this.heap[right]] = [this.heap[right], this.heap[left]];
    };

    size() {
        return this.heap.length;
    }

    insert(value: T) {
        this.heap.push(value);
        this.upHeap(this.heap.length - 1); //upheap from the last index;
    }

    upHeap(index: number) {
        while (index > 0) {
            let parentIndex: number = this.parent(index);

            if (this.compare(this.heap[index], this.heap[parentIndex]) >= 0) break;
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }

    remove(): T {
        if (this.heap.length === 0) throw new Error('Removing from an empty heap!');

        const root: T = this.heap[0];
        const last: T = this.heap.pop()!;

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.downHeap(0);
        }
        return root;
    }

    downHeap(index: number) {

        while (index < this.heap.length) {

            let currIndex = index;
            const left: number = this.left(index);
            const right: number = this.right(index);

            if (left < this.heap.length && this.compare(this.heap[left], this.heap[currIndex]) < 0) {
                currIndex = left;
            }

            if (right < this.heap.length && this.compare(this.heap[right], this.heap[currIndex]) < 0) {
                currIndex = right;
            }

            if (currIndex === index) break;

            this.swap(currIndex, index);
            index = currIndex;
        };
    }

    heapify(arr: T[]): void {
        this.heap = arr.slice(); //beacuase it mutates input array.
        for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
            this.downHeap(i)
        }
    };

    sort(): T[] {
        const backUp = this.heap.slice();
        const sortedArr: T[] = [];
        while (this.heap.length > 0) {
            sortedArr.push(this.remove());
        }
        this.heap = backUp;
        return sortedArr;
    }
}


// run only when this file runs
if (require.main === module) {
    const heap = new Heap<number>();
    const array: number[] = [3, 5, 2, 8, 1, 7, 0, 4];
    heap.heapify(array);
    console.log(heap.sort());
    console.log(heap);
}

export { };