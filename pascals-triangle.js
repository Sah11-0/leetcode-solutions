//Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

var generate = function (numRows) {
    const triangle = [];
    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(0);
        row[0] = 1;
        row[i] = 1;
        for (let j = 1; j < i; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        triangle.push(row);
    }
    return triangle;
}