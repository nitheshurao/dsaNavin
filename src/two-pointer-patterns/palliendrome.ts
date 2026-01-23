

function checkPalliendrome(inp: string): string{
    let p1 = 0;
    let p2 = inp.length - 1;

    while (p1 < p2){
        if (inp[p1] !== inp[p2]) {
            return "This is not a palliendrom";
        }
        p1++;
        p2--;
    }
    return 'This is a palliendrom';
}

const str: string = 'malayalam';
console.log(checkPalliendrome(str));

export {};