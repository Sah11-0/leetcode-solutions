// You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.

// After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

function characterReplacement(s, k) {
    let count = new Map();
    let res = 0;

    let l = 0, maxf = 0;
    for (let r = 0; r < s.length; r++) {
        count.set(s[r], (count.get(s[r]) || 0) + 1);
        maxf = Math.max(maxf, count.get(s[r]));

        while ((r - l + 1) - maxf > k) {
            count.set(s[l], count.get(s[l]) - 1);
            l++;
        }
        res = Math.max(res, r - l + 1);
    }

    return res;
}
