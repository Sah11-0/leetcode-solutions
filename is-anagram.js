// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        let count = {};

        for (let char of s) {
            count[char] = (count[char] || 0) + 1;
        }

        for (let char of t) {
            if (!count[char]) {
                return false;
            }
            count[char]--
        }
        return true;

    }
}