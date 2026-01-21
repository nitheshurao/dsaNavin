

function main(inp: number[], k: number) {
    const hashMap = new Map<number, number>();
    let count = 0;
    let prefixSum = 0;

    hashMap.set(0, 1);

    for (let i: number = 0; i < inp.length; i++) {
        prefixSum += inp[i];
        const reminder = prefixSum % k;

        if (hashMap.has(reminder)) {
            count += hashMap.get(reminder)!
        }

        hashMap.set(reminder, (hashMap.get(reminder) || 0) + 1);
    }
    return count;
}


const arr: number[] = [4, 5, 0, -2, -3, 1];
const K: number = 5;
console.log(main(arr, K));
console.log(4%5);
export { };