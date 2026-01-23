
function maxSumSubArr(nums: number[], k: number): number {
    let windowSum: number = 0;
    let maxSum: number = 0;


    for (let i: number = 0; i < nums.length; i++) {
        windowSum += nums[i];

        if (i >= k - 1) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= nums[i - (k-1)];
        }
    }
    return maxSum;
}

const arr: number[] = [2, 1, 5, 1, 3, 2];
const K: number = 3;
console.log(maxSumSubArr(arr, K));
export { };