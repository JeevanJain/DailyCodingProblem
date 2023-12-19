/**
 * @param {number[]} matrix
 * @return {number}
 */
function rotateMatrixNew(matrix) {
    const n = matrix.length;
    for (let layer = 0; layer < Math.floor(n / 2); layer++) {
        for (let i = layer; i < n - 1 - layer; i++) {
            const temp = matrix[layer][i];
            matrix[layer][i] = matrix[n - 1 - i][layer];
            matrix[n - 1 - i][layer] = matrix[n - 1 - layer][n - 1 - i];
            matrix[n - 1 - layer][n - 1 - i] = matrix[i][n - 1 - layer];
            matrix[i][n - 1 - layer] = temp;
        }
    }
    return matrix;
}

// Example usage
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
const rotatedMatrix = rotateMatrixNew(matrix);
console.log(rotatedMatrix);
// Output: [
// [7, 4, 1],
// [8, 5, 2],
// [9, 6, 3]
// ]