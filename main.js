//part 1
let user = 'John Doe';
console.log(user);
let student = 'Alexey';
console.log(student);
user = student; // user будет Alexey
console.log(user);
//part 2
let test = 1;
test++;
test = test + '1'; // получится число 21
console.log(test);
test = Boolean(test);
console.log(test);
//part 3
let result = 1;
let arr = [2, 3, 5, 8];
for (let i = 0; i < arr.length; i++) {
  result = result * arr[i];
}
console.log(result);
//part 4
let app = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < app.length; i++) {
  if (i > 5 && i < 10) {
    console.log(app);
  }
}
//part 5
let num = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    console.log(num[i]);
  }
}
//lesson-3
//part 1
function palindrome(str) {
  str = str.toLowerCase().replace(/\s/g, '');
  return str === str.split('').reverse().join('');
}
console.log(palindrome('racecar')); //true
console.log(palindrome('magazine')); //false
console.log(palindrome('Bob')); //true
console.log(palindrome('Madam Im Adam')); //true
//part 2
//Возвращение минимального значения
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
/* function min(a, b) {
    return a < b ? a : b; --тернарный вариант
}*/
console.log(min(2, 5)); // вернёт 2
//Возвращение максимального значения
function max(a, y) {
  if (a > y) {
    return a;
  } else {
    return y;
  }
}
/* function max(a, b) {
    return a > b ? a : b; --тернарный вариант
}*/
console.log(max(12, 100)); //вернёт 100
//part 3
const generateArray = (length, max) =>
  [...new Array(length)].map(() => Math.round(Math.random() * max));
const numbers = generateArray(10, 100);
function replaceZero(number) {
  const numStr = `${number}`;
  if (numStr.includes('0')) {
    return `${number}`.replaceAll('0', 'zero');
  }
  return number;
}
console.log(numbers.map(replaceZero));