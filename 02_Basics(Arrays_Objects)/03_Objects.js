
/*We can declare Object in two ways 
1. literal
2. Constructor

If we make Object using Literal than it will create multiple Object
If we make Object using Constructor than it is Singleton Object
*/

//-----------Singleton Objects-----------
//Object.create

//-----------Object Literal--------------

//Symbol
const mysbol=Symbol("key1");//declare Symbol


const jsuser={
    name:"Captain",
    "full name":"Captain America",
    [mysbol]:"mySymbol",//use Symbol ,if we want to check we can make use of log(objectname)
    age:125,
    loc:"NewYork",
    email:"captain@125",
    lastLogIn:["Monday","Tuesday"]
}
// console.log(jsuser.name);
// console.log(jsuser["name"]);//We have to put in String because internally it will treat as String (Key and value pairs)
// console.log(jsuser["full name"]);//We can use this In this type of Situation
// console.log(typeof jsuser.mysbol);//we have declare Symbol but is consider as String 
// console.log(typeof jsuser[mysbol]);//we can access symbol using square bracket


//To change value
jsuser.email="Captain@marvel@123";
//console.log(jsuser);
//If We want to lock values than we can make use of freeze
//Object.freeze(jsuser); 
//jsuser.email="hello";
//console.log(jsuser);


jsuser.greeating=function() {
    console.log("Good Morning");
}
jsuser.greeatingtwo=function() {
    console.log(`Good Morning ${this.name}`);
}
/*when a function does not have an explicit return statement, it implicitly
returns undefined. This means that if the function reaches the end of its
execution without encountering a return statement, it behaves as if it had
return undefined; at the end. */
/* The output [Function (anonymous)] is actually a representation provided by
the browser's or Node.js's console when it displays an anonymous function. When
a function is defined without a name, it is considered anonymous. */
console.log(jsuser.greeating);
console.log(jsuser.greeating());
console.log(jsuser.greeatingtwo());
