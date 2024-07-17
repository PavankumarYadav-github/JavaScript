//Singleton Objects

const tinderUser=new Object();
tinderUser.id="123abc";
tinderUser.name="Sam";
tinderUser.isLoggedIn=false;

console.log(tinderUser);

const regularUser={
    email:"someone@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Captain",
            lastname:"choudhary"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);


const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"b"};

const obj3={obj1,obj2};
console.log(obj3);//This will print object inside object

/* The Object.assign() static method copies all enumerable own properties from
one or more source objects to a target object. It returns the modified target
object. */

/* Enumerability refers to whether a property will be included during the
iteration of the properties of an object. Some properties may be marked as
non-enumerable, meaning they won't show up in a for...in loop or when using
Object.keys().

The Object.defineProperty() method is commonly used to control the enumerability
of properties. By default, properties created using simple assignment are
enumerable, but you can change this behavior with Object.defineProperty().
Example :- const obj = { a: 1, b: 2 };

Object.defineProperty(obj, 'c', {
  value: 3,
  enumerable: false, // c will not be enumerated
});

for (let key in obj) {
  console.log(key); // Outputs: a, b
}
*/

/* Ownership: Ownership of properties refers to whether a property is "own" or
inherited from the prototype chain. An "own" property is a property that
directly belongs to an object, while an inherited property comes from the
prototype chain.

You can use hasOwnProperty() method to check if a property is an "own" property
of an object:

javascript Copy code const obj = { a: 1, b: 2 };

console.log(obj.hasOwnProperty('a')); // true
console.log(obj.hasOwnProperty('toString')); // false (inherited from
Object.prototype */

/* Every property in JavaScript objects can be classified by three factors:
Enumerable or non-enumerable; String or symbol; Own property or inherited
property from the prototype chain. Enumerable properties are those properties
whose internal enumerable flag is set to true, which is the default for
properties created via simple assignment or via a property initializer.
Properties defined via Object.defineProperty and such are not enumerable by
default. Most iteration means (such as for...in loops and Object.keys) only
visit enumerable keys.

Ownership of properties is determined by whether the property belongs to the
object directly and not to its prototype chain.

All properties, enumerable or not, string or symbol, own or inherited, can be
accessed with dot notation or bracket notation. In this section, we will focus
on JavaScript means that visit a group of object properties one-by-one */

/* -------------------Object.assign() Method-------------------------*/

/* The Object.assign() static method copies all enumerable own properties from
one or more source objects to a target object. It returns the modified target
object. */
/* By using an empty object {} as the target object, you ensure that a new
object is created to hold the combined properties of obj4 and obj5, without
modifying the original objects. If you omitted the {}, and used only
Object.assign(obj4, obj5), then obj4 would be modified directly, and the
combined object would be stored in obj4. Using an empty object as the target
ensures that the original objects remain unchanged. */

const obj4={1:"a",2:"b"};
const obj5={3:"c",4:"b"};
const obj6=Object.assign({},obj4,obj5);
console.log(obj6);

//Second way without Object.assign()
const obj7={...obj4,...obj5};
console.log(obj7);



/* --------------Object.keys(para)------------------ */
console.log(tinderUser);
/* The Object.keys() static method returns an array of a given object's own
enumerable string-keyed property names. */
console.log(Object.keys(tinderUser));



/* --------------Object.values(para)------------------ */
console.log(tinderUser);
/* The Object.values() static method returns an array of a given object's own
enumerable string-keyed property values. */
console.log(Object.values(tinderUser));


/* --------------Object.entries(para)------------------ */
console.log(tinderUser);
/* The Object.entries() static method returns an array of a given object's own
enumerable string-keyed property key-value pairs. */
console.log(Object.entries(tinderUser));

/* --------------Object.prototype.hasOwnProperty()------------------ */
console.log(tinderUser);
/* The hasOwnProperty() method of Object instances returns a boolean indicating
whether this object has the specified property as its own property (as opposed
to inheriting it). */
console.log(tinderUser.hasOwnProperty("name"));
console.log(tinderUser.hasOwnProperty("email"));


/*-------------------------------------------DeStructure--------------------------------------------- */
/* Destructuring in JavaScript is a way to extract values from arrays or objects
and assign them to variables in a more concise and readable manner. It's a
syntax feature introduced in ECMAScript 6 (ES6). Destructuring can be applied to
arrays and objects. */
const course={
  coursename:"JS",
  price:"999",
  Instructor:"Hitesh"
}
/* To access this we have to course.key to avoid this we use object Destructuring */
console.log(course.Instructor);

//1 way
const {Instructor}=course;
console.log(Instructor);
//2 Way
const {Instructor:a}=course;
console.log(a);

//-----------Json Formate---------
/*
{
  "name":"Captain",
  "email":"captain@gmail.com",
  "city":"New York"
}
*/
