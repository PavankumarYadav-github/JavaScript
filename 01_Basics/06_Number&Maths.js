// const score=400;
// //score="hello";
// console.log(score);

// //if we want input in number than  
// const balance=new Number(score);
// console.log(balance); 

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const num=1123.666;
// console.log(num.toPrecision(4));

// const hundred=1000000;
// console.log(hundred.toLocaleString());
// console.log(hundred.toLocaleString('en-IN'));

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);

//------------------------------MATHS-----------------------------------------------------------

// console.log(Math);
// console.log(Math.abs(-5));//it will convert negative to positive
// console.log(Math.round(3.5));//4
// console.log(Math.ceil(2.2));//TOP 3
// console.log(Math.floor(2.8));//Bottom 2
// console.log(Math.sqrt(25));
// console.log(Math.min(2,3,5,1,0,10)); 
// console.log(Math.max(2,3,5,1,0,10)); 
// console.log((Math.random()*10)+1); // will return value between 0-1 after multiplicaltion it shift one digit ahead


console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10;
const max=20;

console.log(Math.floor(Math.random() * (max - min + 1))+min);
console.log(Math.floor(Math.random() * (10 +1))+min);