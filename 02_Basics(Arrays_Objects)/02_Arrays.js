const marvel_heros=["Thor","Ironman","Spiderman"];
const dc_heros=["Superman","Flash","Batman"];

//marvel_heros.push(dc_heros);//This will add dc_heros as a array as 4 element ,push will modife in existing array
//console.log(marvel_heros);

const all=marvel_heros.concat(dc_heros);//This will concat element and generate new array 
console.log(all);

//----------Seprade Operator-----------
/* The spread (...) syntax allows an iterable, such as an array or string, to be
expanded in places where zero or more arguments (for function calls) or elements
(for array literals) are expected. In an object literal, the spread syntax
enumerates the properties of an object and adds the key-value pairs to the
object being created. Spread syntax looks exactly like rest syntax. In a way,
spread syntax is the opposite of rest syntax. Spread syntax "expands" an array
into its elements, while rest syntax collects multiple elements and "condenses"
them into a single element.
*/
const all_heros=[...marvel_heros,...dc_heros];
console.log(all_heros);



/*--------------Flat() Method--------------*/
/* The flat() method of Array instances creates a new array with all sub-array
elements concatenated into it recursively up to the specified depth */
const arrays=[1,2,3,[4,5,6],[7,8,9,[2,0]]];
const another_array=arrays.flat(Infinity);
console.log(another_array); 


/*--------------from() Method--------------*/
/* The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object. */
//to See if it is array or  not
console.log(Array.isArray("HelloWorld"));
//To conver into arrays
console.log(Array.from("Hello"));//from() method will convert given value into arrays
//To covert object into arrays
//from() method will return emplty array if it is not able to convert
console.log(Array.from({name:"Captanin"}));
console.log(Array.from(Object.values({name:"Captanin"})));

/*--------------of() Method--------------*/
/* The Array.of() static method creates a new Array instance from a variable
number of arguments, regardless of number or type of the arguments. */
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3)); 