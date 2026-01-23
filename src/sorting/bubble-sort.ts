

function bubbleSort(numArr: number[]) {

    const lastIndex: number = numArr.length - 1;

    for (let i: number = 0; i < numArr.length; i++) {
        for (let j: number = lastIndex; j > i; j--) {
            if (numArr[j] < numArr[j - 1]) {
                [numArr[j], numArr[j - 1]] = [numArr[j - 1], numArr[j]];
            }
        };
    };
    return arr;
}

const arr: number[] = [2, 1, 3, 2, 5];
console.log(bubbleSort(arr));
export { };