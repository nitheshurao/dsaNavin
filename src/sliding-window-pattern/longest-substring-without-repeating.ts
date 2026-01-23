
function lengthOfLongestSubstring(s: string): number {
    let hashSet = new Set<string>();

    let maxLength: number = 0;
    let left: number = 0;

    for (let right:number = 0; right < s.length; right ++) {
        while (hashSet.has(s[right])){
            hashSet.delete(s[left]);
            left ++;
        }
        hashSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
    
};

const s: string = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
export { };

