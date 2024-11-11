// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

var reverseVowels = function (s) {
    const splitStr = s.split('');
    let l = 0;
    let r = splitStr.length - 1;
    let temp;
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    while (l < r) {
        if (!vowels.has(splitStr[l])) {
            l++;
            continue;
        }
        if (!vowels.has(splitStr[r])) {
            r--;
            continue;
        }
        temp = splitStr[l];
        splitStr[l] = splitStr[r];
        splitStr[r] = temp;
        l++;
        r--;


    }
    return splitStr.join('');
};