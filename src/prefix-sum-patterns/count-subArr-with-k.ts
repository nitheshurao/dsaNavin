
function countSubArraysWithSumK(arr: number[], k: number): number {

    const prefixCountMap = new Map<number, number>();
    let count: number = 0;
    let prefixSum: number = 0;

    prefixCountMap.set(0, 1);

    for (let i: number = 0; i < arr.length; i++) {
        const num: number = arr[i];
        prefixSum += num;
        const needed = prefixSum - k;

        if (prefixCountMap.has(needed)) {
            const neededCount = prefixCountMap.get(needed)!
            count += neededCount;
        }

        prefixCountMap.set(prefixSum, (prefixCountMap.get(prefixSum) || 0) + 1);
    }
    return count;
}



const input: number[] = [1, 2, 3, -2, 5];
const k: number = 3;
console.log(countSubArraysWithSumK(input, k));

export { } //typescript consider this as module