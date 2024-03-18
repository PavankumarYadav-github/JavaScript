
//String is Object
const greet="Hello";
const repoCount=20;
console.log(greet + repoCount+" value");
//To Replace this we use ` ` also called String interpolation 
//here we can make placeholder we can injected variable
console.log(`${greet.toUpperCase()} My repocount is ${repoCount}`);


const game=new String('GTA 5');
console.log(game[0]);
console.log(game.__proto__);
console.log(game.length);
console.log(game.charAt(2));
console.log(game.indexOf('A'));
console.log(game.trim());//Remove white space from boths side
console.log(game.split(" "));//split() splits a string into an array of substrings, and returns the array:
console.log('Slice=> '+game.slice(0,4));
console.log(game.replace(" ","$"));//Will replace " " with "$"
console.log(game.toUpperCase());
console.log(game.toLowerCase());

console.log("---------------------------------------------");
const Moviename= new String('Bahubali 2');
//we can put negative value
const newStr=Moviename.substring(0,4);
console.log(newStr);
console.log("---------------------------------------------");
//we acn put negative values
const anotherString=Moviename.slice(-8,4);
console.log(anotherString);

console.log("---------------------------------------------");
//Remove white space from boths side
const movie="    Lost of Space    ";
console.log(movie.trim());
console.log(movie.trimStart());
console.log(movie.trimEnd());

console.log("---------------------------------------------");
const url="http://helloworld123/Thousand%don210"
console.log(url.replace("%","-"));
console.log(url.includes('hello'));

console.log("---------------------------------------------");
const sayHello="I am Captain America";
const arr=sayHello.split(" ",2);
console.log(arr);