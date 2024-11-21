// Given a string s, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function (s) {
    const charSet = new Set();
    let longestSubstring = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        longestSubstring = Math.max(longestSubstring, right - left + 1);
    }

    return longestSubstring;
};