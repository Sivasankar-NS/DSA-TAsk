function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
let n = 6;
let result = factorial(n);
console.log("Factorial of", n, ":", result);
