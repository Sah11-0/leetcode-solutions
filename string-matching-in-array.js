// Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.

var stringMatching = function (words) {
    return words.filter(word =>
        words.some(otherWord =>
            word !== otherWord && otherWord.includes(word)
        )
    );
};

//optimized
var stringMatching = function (words) {
    words.sort((a, b) => a.length - b.length);

    const result = new Set();

    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[j].includes(words[i])) {
                result.add(words[i]);
                break;
            }
        }
    }

    return Array.from(result);
};