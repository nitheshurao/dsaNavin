
function longestSubArrWithSumK(inp: number[], k: number) {
    let p1 = 0;
    let p2 = 0;
    let sum = 0;
    let result = 0;

    while(p2 < inp.length){
        sum += inp[p2];
        while (sum > k){
            sum -= inp[p1]
            p1 ++;
        }
        p2 ++;
        result = Math.max(result, p2 - p1);
    }

    return result;
}

const arr: number[] = [1, 2, 3, 4];
// const arr: number[] = [2, 1, 5, 1, 3, 2];
const K: number = 4;
console.log(longestSubArrWithSumK(arr, K));

export {};