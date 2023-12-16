/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

const findSum = (nums, k) => {
    let set = new Set();
    for (let m of nums) {
        if (set.has(k - m)) {
            return true
        } else {
            set.add(m);
        }
    }
}
// Time Complexity of O(n)
// Space Complexity of O(n)

// OTHER SOLUTION

// const addNumbers = (arr, k) => {
//   for (let m of arr) {
//     return arr.includes(k-m)
//   }
// }
// Time complexity of O(n^2)
// Using Built in method "includes"

console.log(findSum([10, 15, 3, 7], 17));

export default findSum;