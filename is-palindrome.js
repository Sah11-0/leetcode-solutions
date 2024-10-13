// Given a string s, return true if it is a palindrome, otherwise return false.
// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

class Solution {
    isAlphanumeric(char) {
        return (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9');
    }

    isPalindrome(s) {
        let newStr = '';
        for (let char of s) {
            if (this.isAlphanumeric(char)) {
                newStr += char.toLowerCase();
            }
        }
        return newStr === newStr.split('').reverse().join('');
    }
}