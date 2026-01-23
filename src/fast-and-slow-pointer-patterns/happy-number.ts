
function getNext(k: number) {
    let sum: number = 0;
    let num: number = k;

    while (num !== 0) {
        sum += (num % 10)**2;
        num = Math.floor(num / 10);
    }
    return sum;
}

function checkHappyNumber(num: number): boolean{
    let slow: number = num;
    let fast: number = getNext(num);

    while(slow != fast && fast !== 1) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }

    return fast === 1;
}



const n: number = 19;
console.log(checkHappyNumber(n));
export {};