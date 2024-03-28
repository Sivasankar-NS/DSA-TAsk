function rotateArray(nums, k) {
    function reverse(nums, start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]]; 
            start++;
            end--;
        }
    }
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
}
let inputArray = [3, 8, 9, 2, 5];
let k = 2;
rotateArray(inputArray, k);
console.log("Rotated Array:", inputArray);
