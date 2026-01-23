
function maximumAverage(arr: number[], tar: number): number {
    let maxSum: number = 0;

    let sum: number = 0;
    for (let i: number = 0; i < k; i++) {
        sum += arr[i];
    }

    maxSum = sum;

    for (let i: number = k; i < arr.length; i++) {
        sum += arr[i];
        sum -= arr[i - k];
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum/k;

}

const nums: number[] = [1, 12, -5, -6, 50, 3];
const k: number = 4;

console.log(maximumAverage(nums, k));

export { };