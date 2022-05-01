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
for (let i = 0; i < app.length; i++){
    if (i > 5 && i < 10){
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