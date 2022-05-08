function curry(f) {
    return function (a) {
        return function (b) {
            return f(a, b);
        };
    };
}
function sum(a, b) {
    return a + b;
}
let curriedSum = curry(sum);
test('Sum should return sum of two values', () => {
  expect(curriedSum(5)(2)).toBe(7);
});
