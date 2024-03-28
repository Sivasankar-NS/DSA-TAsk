function findMissingNumber(nums) {
    let n = nums.length + 1;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = nums.reduce((sum, num) => sum + num, 0);
    let missingNumber = expectedSum - actualSum;
    return missingNumber;
}
let inputArray = [1, 3, 4, 5, 6, 7, 8, 9, 10];
let missingNumber = findMissingNumber(inputArray);
console.log("Missing Number:", missingNumber);
