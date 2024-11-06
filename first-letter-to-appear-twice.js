// Given a string s consisting of lowercase English letters, return the first letter to appear twice.

// Note: A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
// s will contain at least one letter that appears twice.

var repeatedCharacter = function (s) {
    const letters = {};
    for (const letter of s) {
        letters[letter] = (letters[letter] || 0) + 1;
        if (letters[letter] === 2) {
            return letter;
        }
    }

};

//optimized
function repeatedCharacter(s) {
    const seen = new Set();
    for (const letter of s) {
        if (seen.has(letter)) {
            return letter;
        }
        seen.add(letter);
    }
}