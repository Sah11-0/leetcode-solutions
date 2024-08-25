//You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.
// Return the number of consistent strings in the array words.

var countConsistentStrings = function (allowed, words) {
    const allowedSet = new Set(allowed);
    const consistentWords = words.filter(word => {
        return [...word].every(char => allowedSet.has(char));
    });

    return consistentWords.length;
};
