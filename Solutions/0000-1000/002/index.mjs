function productExceptSelf(nums) {
    const output = new Array(nums.length).fill(1);
    let prefix = 1;

    // Calculate prefix product
    for (let i = 0; i < nums.length; i++) {
        output[i] = prefix;
        prefix *= nums[i];
    }

    // Calculate suffix product and update results
    let suffix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= suffix;
        suffix *= nums[i];
    }

    return output;
}

// Example usage
const nums = [1, 2, 3, 4, 5];
const result = productExceptSelf(nums);
console.log(result); // Output: [120, 60, 40, 30, 24]