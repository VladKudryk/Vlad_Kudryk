let a = 10;
let b = 3.5;
let text = "Hello";
let flag = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof text);
console.log(typeof flag);

a = "15";
b = 7;
text = "JavaScript";
flag = false;

console.log(typeof a);
console.log(typeof b);
console.log(typeof text);
console.log(typeof flag);

let result = 5 + "5";
console.log(result);

console.log(Number(true));
console.log(Number(false));

let student = {
    name: "Vlad",
    age: 17,
    student: true
};

console.log(JSON.stringify(student));