//Given a string s, return true if the s can be palindrome after deleting at most one character from it.

function validPalindrome(s) {
    let alphanumericStr = '';

    for (let char of s) {
        if (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        ) {
            alphanumericStr += char.toLowerCase();
        }
    }

    function isPalindromeRange(s, left, right) {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    let i = 0;
    let j = alphanumericStr.length - 1;

    while (i < j) {
        if (alphanumericStr[i] !== alphanumericStr[j]) {
            return (
                isPalindromeRange(alphanumericStr, i + 1, j) ||
                isPalindromeRange(alphanumericStr, i, j - 1)
            );
        }
        i++;
        j--;
    }

    return true;
}

//optimized
function isPalindrome(s) {
    const isAlphanumeric = (c) => (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')
    const str = s.toLowerCase();
    let i = 0, j = str.length - 1;

    while (i < j) {
        while (i < j && !isAlphanumeric(str[i])) i++;
        while (i < j && !isAlphanumeric(str[j])) j--;

        if (str[i] !== str[j]) {
            const skipLeft = checkRange(str, i + 1, j);
            const skipRight = checkRange(str, i, j - 1);
            return skipLeft || skipRight;
        }
        i++;
        j--;
    }

    return true;
}

function checkRange(s, left, right) {
    while (left < right) {
        if (s[left++] !== s[right--]) return false;
    }
    return true;
}