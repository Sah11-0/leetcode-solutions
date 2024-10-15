// Given an integer array nums and an integer k, return the k most frequent elements within the array.
// The test cases are generated such that the answer is always unique.
// You may return the output in any order.

function topKFrequent(nums, k) {
    const count = {};
    for (const n of nums) {
        count[n] = (count[n] || 0) + 1;
    }

    const freq = Aray.from({ length: nums.length + 1 }, () => []);

    for (const n in count) {
        freq[count[n]].push(pareseInt(n));
    }

    const res = [];
    for (let i = freq.length - 1; i > 0; i--) {
        for (const n of freq[i]) {
            res.push(n);
            if (res.length === k) {
                return res;
            }
        }
    }
}