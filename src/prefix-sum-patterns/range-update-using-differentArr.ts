
// brutforce method
function mine(len: number, upd: number[][]) {
    const res = new Array(len).fill(0);

    for (let c: number = 0; c < upd.length; c++) {
        const startInd: number = upd[c][0];
        const endInd: number = upd[c][1];
        const value: number = upd[c][2];
        for (let arrInd: number = startInd; arrInd <= endInd; arrInd++) {
            res[arrInd] += value;
        }
    }

    return res;
}

// prefix sumMethod
function main(len: number, upd: number[][]) {
    const res = new Array(len).fill(0)

    for (let i: number = 0; i < upd.length; i++) {
        const startIndex = upd[i][0];
        const endIndex = upd[i][1];
        const value = upd[i][2];

        res[startIndex] = value;
        if (endIndex + 1 < len) {
            res[endIndex + 1] = -value;
        }
    }

    for (let c: number = 1; c < res.length; c++){
        res[c] += res[c - 1];
    }

    return res;
}

const n: number = 5
const updates: [number, number, number][] = [
    [1, 3, 2],
    [2, 4, 3],
    [0, 2, -2]
]
console.log(main(n, updates));
export { };