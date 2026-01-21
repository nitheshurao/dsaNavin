
function longestSubArr(inp: number[], k: number): number {
    const hashMap = new Map<number, number>();
    let longestArrLength: number = 0;
    let prefixSum = 0;

    for (let i = 0; i < inp.length; i++) {
        prefixSum += inp[i];

        if (prefixSum === k) {
            longestArrLength = i + 1;
        }

        const needed = prefixSum - k;
        if (hashMap.has(needed)) {
            const prevIndex = hashMap.get(needed)!
            longestArrLength = Math.max(longestArrLength, i - prevIndex);
        }

        if (!hashMap.has(prefixSum)) {
            hashMap.set(prefixSum, i);
        }
    }
    return longestArrLength;
}


const arr = [1, -1, 5, -2, 3];
const k = 3;
console.log(longestSubArr(arr, k));
export { };