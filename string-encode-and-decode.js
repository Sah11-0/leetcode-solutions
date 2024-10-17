// Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.
// Please implement encode and decode

class Solution {

    encode(strs) {
        let encodedStr = '';
        for (const str of strs) {
            encodedStr += str.length + '#' + str;
        }
        return encodedStr;
    };

    decode(encodedStr) {
        const decodedList = [];
        let i = 0;
        while (i < encodedStr.length) {
            let j = i;
            while (encodedStr[j] !== '#') {
                j++;
            }
            const length = parseInt(encodedStr.slice(i, j), 10);
            const str = encodedStr.slice(j + 1, j + 1 + length);
            decodedList.push(str);
            i = j + 1 + length;
        }
        return decodedList;
    }
};