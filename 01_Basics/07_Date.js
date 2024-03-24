//DATE

// let date=new Date();
// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toLocaleString());
// console.log(typeof date);


let mydate=new Date(2023,0,23);
let mydate1=new Date(2023, 0, 23, 5, 3);
let dateformate=new Date("2023-01-14");
let dateformate1=new Date("01-14-2023");
console.log(mydate.toDateString());
console.log(mydate1.toLocaleString());
console.log(dateformate.toDateString());
console.log(dateformate1.toLocaleDateString());

let mytimeStamp=Date.now();
console.log(mytimeStamp);
console.log(mydate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate=new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
    weekday:"long",
})
console.log(newDate);
console.log(newDate.toLocaleString('default',{
    weekday:"long",
}));
