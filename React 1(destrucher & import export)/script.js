import {arrr} from "./app.js"
import {ako} from "./app.js"
import  hello from "./app.js"


console.log(hello.name);
console.log(arrr);
console.log(ako);













let arr=[1,2,3,4,5]
// let arr4=[...arr]
// console.log(arr4);

let [a,b,c,...d]=arr;

console.log(a,b,c,d);

let ak=[10,20,30,40,50]

let [...arr2]=ak;
console.log(arr2);






const user={
    name:"harsh",
    age:"20",
    address:{
        city:"A`bad",
        state:"GJ"
    }

}
// const {name,age}=user;
// console.log(name,age);


// const {name,...rest}=user;
// console.log(name,rest);


// const {address:{city,state}}=user;
// console.log(city,state);






