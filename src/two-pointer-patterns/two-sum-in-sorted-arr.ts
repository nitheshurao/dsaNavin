

function twoSum(nums: number[], tar: number): boolean {
    let p1: number = 0;
    let p2: number = nums.length - 1;

    while (p1 < p2) {
        if (nums[p1] + nums[p2] === tar) return true;
        if (nums[p1] + nums[p2] < tar) {
            p1++;
        } else {
            p2--;
        }
    }
    return false;
}

const arr: number[] = [1, 2, 3, 4, 6];
const target: number = 6;

console.log(twoSum(arr, target));

export { };