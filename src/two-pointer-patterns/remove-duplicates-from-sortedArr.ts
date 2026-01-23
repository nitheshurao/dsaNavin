
function removeDup(nums: number[]): number {
    if (nums.length === 0) return 0;

    let p1: number = 1;
    let p2: number = 1;

    while (p2 < nums.length) {
        if (nums[p2] !== nums[p2 - 1]) {
            nums[p1] = nums[p2]
            p1++;
        }
        p2++;
    }
    return p1;
}

const arr: number[] = [1, 1, 2, 2, 3, 4, 4];
const k = removeDup(arr);
console.log(arr.slice(0, k));
export { };