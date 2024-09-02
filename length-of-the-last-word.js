//Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

var lengthOfLastWord = function (s) {
    let count = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ') {
            if (count > 0) break;
        } else {
            count++
        }
    }
    return count;
}
