// range sum = sum of elements between two indices.

function getPrefixSum(arr: number[]): number[] {
    for (let i: number = 1; i < arr.length; i++) {
        arr[i] = arr[i] + arr[i - 1];
    }
    return arr;
}

function findRangeSum (arr: number[], leftRange: number, rigthRange: number): number {
    const prefixSum = getPrefixSum([...arr]);
    return prefixSum[rigthRange] - prefixSum[leftRange - 1];
}



const inputVal: number[] = [3, 5, 2, 7, 4, 1];
const l:number = 1;
const r: number = 5;  
console.log(findRangeSum(inputVal, l, r));



export {} //typescript consider this as module