// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

var repeatedSubstringPattern = function (s) {
    const doubled = s + s;
    return doubled.slice(1, -1).includes(s);
};