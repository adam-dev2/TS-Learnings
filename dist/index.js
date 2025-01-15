"use strict";
// let x: string | null = prompt('Enter firstname: ');
// console.log('hello',x);
// function legal(age: number){
//     if(age>18) return true
//     return false;
// }
// let ans:boolean = legal(21);
// console.log(ans)
// function delayedcall (fn:()=>void){
//     setTimeout(fn,1000);
// }
// function log() {
//     console.log('asd');
// }
// delayedcall(log);
function greet(user) {
    console.log("hello", user.name);
}
const user = {
    name: 'adam',
    age: 22
};
greet(user);
