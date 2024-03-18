// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);

console.log("2">1);
console.log("02">1);
console.log(null>0);
console.log(null==0);
console.log(null>=0);

// The reason is that an equality check == and comparisons > <>=
// <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null > 0 is false.

console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);

//===
console.log("===");
console.log("2"===2);
console.log("2"==="2");


//MEMORY
//Stack(Primitive),Heap(Non-Primitive)

//Primitive
let name="Alex";
let name2=name;
name2="joyes";
console.log(name);
console.log(name2);

//Non-Primitive
let obj1={
    email:"alex@123",
    upi:"12545"
}
let obj2=obj1;

obj2.email="joyes@123"
console.log(obj1);
console.log(obj2);