// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    const letters = {};

    for (const char of s) {
        letters[char] = (letters[char] || 0) + 1;
    }

    for (const char of t) {
        if (!letters[char]) return false;
        letters[char]--;
    }

    return true;
};