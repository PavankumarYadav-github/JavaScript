/*In JavaScript, arrays aren't primitives but are instead Array objects with the
following core characteristics:

JavaScript arrays are resizable and can contain a mix of different data types.
(When those characteristics are undesirable, use typed arrays instead.)

JavaScript arrays are not associative arrays and so, array elements cannot be
accessed using arbitrary strings as indexes, but must be accessed using
nonnegative integers (or their respective string form) as indexes. JavaScript
arrays are zero-indexed: the first element of an array is at index 0, the second
is at index 1, and so on — and the last element is at the value of the array's
length property minus 1.

JavaScript array-copy operations create shallow copies. 
<----------------shallowcopie--------------------->
A shallow copy of an object is a copy whose 
properties share the same references (point to the same underlying values) as
those of the source object from which the copy was made. As a result, when you
change either the source or the copy, you may also cause the other object to
change too. That behavior contrasts with the behavior of a deep copy, in which
the source and copy are completely independent. (All standard built-in copy
operations with any JavaScript objects create shallow copies, rather than deep
copies).

<---------------Deep Copie------------------------>
A deep copy of an object is
a copy whose properties do not share the same references (point to the same
underlying values) as those of the source object from which the copy was made.
As a result, when you change either the source or the copy, you can be assured
you're not causing the other object to change too. That behavior contrasts with
the behavior of a shallow copy, in which changes to nested properties in the
source or the copy may cause the other object to change too.

*/
//Arays Basics
const Arr = [0, 1, 2, 3, 4, 5, true, "Hello"];
console.log(Arr);

const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr[1]);

const myArr2=["Captain","Hulk","IronMan"];
console.log(myArr2);

const myArr3=new Array(1,2,3,4,5);
console.log(myArr3[0]);


//-------------------------------Arrays Methods-------------------------------------
console.log("-------------------------------Arrays Methods-------------------------------------");

//-----push() Method------
/*The push() method of Array instances adds the specified elements to the end of
an array and returns the new length of the array.*/
const arr=[1,2,3,4,5];
arr.push(6);
arr.push(7);
console.log("Push()=>  ",arr);


//------POP() Method------
/* The pop() method of Array instances removes the last element from an array
and returns that element. This method changes the length of the array. */
const arr1=[1,2,3,4,5];
arr1.pop();
console.log(arr1.pop());
console.log("Pop()=>  "+arr1);

//-------Unshift() Method-----
/* The unshift() method of Array instances adds the specified elements to the
beginning of an array and returns the new length of the array */
const arr2=[1,2,3,4,5];
arr2.unshift(7);
console.log("UnShift=> "+arr2);

//-------Shift() Method-----
/* The shift() method of Array instances removes the first element from an array
and returns that removed element. This method changes the length of the array.
*/
const arr3=[1,2,3,4,5];
arr3.shift();
console.log("Shift=> "+arr3);

//-------Includes() Method------
/* The includes() method of Array instances determines whether an array includes
a certain value among its entries, returning true or false as appropriate. */
const arr4=[1,2,3,4,5];
console.log("Includes=> "+arr3.includes(3));

//-------IndexOf() Method------
/* The indexOf() method of Array instances returns the first index at which a
given element can be found in the array, or -1 if it is not present. */
const arr5=[1,2,3,4,5];
console.log("IndexOf=> "+arr5.indexOf(4));
console.log("IndexOf=> "+arr5.indexOf(7));

//-------Join() Method----------
/* The join() method of Array instances creates and returns a new string by
concatenating all of the elements in this array, separated by commas or a
specified separator string. If the array has only one item, then that item will
be returned without using the separator. A string to separate each pair of
adjacent elements of the array. If omitted, the array elements are separated
with a comma (",")
 */
const numarr=[1,2,3,4,5];
console.log(typeof numarr);
console.log("before join=> ",numarr);
const newarr=numarr.join();
console.log("After Join=> ",newarr);
console.log(typeof newarr);

//----Slice() Method----
/* The slice() method of Array instances returns a shallow copy of a portion of
an array into a new array object selected from start to end (end not included)
where start and end represent the index of items in that array. The original
array will not be modified. */
const arrays=[1,2,3,4,5];
console.log("Before Slice=> ",arrays);
const arrays2=arrays.slice(1,4);
console.log("After Slice=> ",arrays2);
console.log(arrays);

//-----Splice() Method------
/* The splice() method of Array instances changes the contents of an array by
removing or replacing existing elements and/or adding new elements in place. */
const arrays3=[1,2,3,4,5];
console.log("Before Splice=> ",arrays);
const arrays4=arrays3.splice(1,2);
console.log("After Splice=> ",arrays4);
console.log(arrays3);
/*---------------------Difference Between Slice & Splice-------------------*/
/* Slice does not change original array but Splice change original array 
   Slice does not include last element and Splice include last element */ 